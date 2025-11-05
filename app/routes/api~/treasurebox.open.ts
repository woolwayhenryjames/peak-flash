import type { ActionFunctionArgs } from "react-router";
import { data } from "react-router";
import { getDbUser } from "~/services/auth.server";
import { logger } from "~/services/logger.server";
import { openTreasureBox } from "~/services/treasurebox.server";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return data({ error: "Method not allowed" }, { status: 405 });
  }

  // 验证用户
  const userResult = await getDbUser(request);
  if (userResult.isErr()) {
    return data({ error: "Unauthorized" }, { status: 401 });
  }

  const user = userResult.value;

  // 解析请求体
  const body = await request.json();
  const { userId } = body;

  // 验证userId与当前用户匹配
  if (userId !== user.id) {
    return data({ error: "Forbidden" }, { status: 403 });
  }

  // 打开宝箱
  const treasureBox = await openTreasureBox(userId);

  logger.info(`User ${userId} opened their treasure box`);

  return data({ success: true, treasureBox });
}
