import type { JsonObject } from '@prisma/client/runtime/library';
import { db } from '~/services/db.server';
import { logger } from '~/services/logger.server';

export async function checkUserCampaignAlgo() {
  const users = await db.user.findMany({ select: { email: true } });
  const campains = await db.campaign.findMany({
    select: { joinRequirement: true },
  });
  const emailSet = new Set(users.map((user) => user.email));
  const keywordsList = campains.map(
    (campaign) =>
      ((campaign.joinRequirement as JsonObject)?.[
        'Required Tags'
      ] as string[]) || []
  );
  const taskList = [...emailSet].flatMap((email) =>
    keywordsList.map((keywords) => ({ email, keywords }))
  );
  const algoTasks = await db.$queryRaw<{ username: string; keyword: string }[]>`
SELECT
  tiktok_creator_score.keyword_scores.keyword, 
  tiktok_creator_score.users.username
FROM
	tiktok_creator_score.keyword_scores
	INNER JOIN
	tiktok_creator_score.users
	ON
		tiktok_creator_score.keyword_scores.user_id = tiktok_creator_score.users.id;
  `;
  for (const task of taskList) {
    const matchingTask = algoTasks.find(
      (algoTask) =>
        algoTask.username === task.email &&
        algoTask.keyword.split(' | ').sort().join(' | ') ===
          task.keywords.sort().join(' | ')
    );
    if (!matchingTask) {
      fetch(
        `${import.meta.env.MODE === 'production' ? 'http://172.31.28.161:3333' : 'http://localhost:3333'}/api/addUser`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: task.email,
            keywords: task.keywords,
          }),
        }
      )
        .then((res) => {
          if (!res.ok) {
            logger.error('Failed to send task:', res.statusText);
          }
          logger.info('Task sent successfully for', {
            username: task.email,
            keywords: task.keywords,
          });
        })
        .catch((error) => {
          logger.error('Error sending task:', error);
        });
    }
  }
}

export async function updateUserPoints() {
  try {
    await db.$executeRaw`
    UPDATE \`User\`
    INNER JOIN tiktok_creator_score.users
    ON \`User\`.email = tiktok_creator_score.users.username
  SET \`User\`.kindleScore = COALESCE(tiktok_creator_score.users.account_total_score, \`User\`.kindleScore);`;
  } catch (error) {
    logger.error('Error updating user points:', error);
  }
}
