import type { JsonObject } from '@prisma/client/runtime/library';
import { db } from '~/services/db.server';

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
  console.log('Fetched algo tasks:', algoTasks);
  console.log('Total tasks to check:', taskList);
  for (const task of taskList) {
    const matchingTask = algoTasks.find(
      (algoTask) =>
        algoTask.username === task.email &&
        algoTask.keyword === task.keywords.join(', ')
    );
    if (!matchingTask) {
      fetch('https://distant-algo.peakboom.ai/api/addUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: task.email, keywords: task.keywords }),
      }).then((res) => {
        if (!res.ok) {
          console.error('Failed to send task:', res.statusText);
        }
        console.log('Task sent successfully for', res);
      });
    }
  }
}

export async function updateUserPoints() {
  try {
    await db.$executeRaw`
    UPDATE content_score.\`User\`
    INNER JOIN tiktok_creator_score.users
    ON content_score.\`User\`.email = tiktok_creator_score.users.username
  SET content_score.\`User\`.kindleScore = COALESCE(tiktok_creator_score.users.account_total_score, content_score.\`User\`.kindleScore);`;
  } catch (error) {
    console.error('Error updating user points:', error);
  }
}
