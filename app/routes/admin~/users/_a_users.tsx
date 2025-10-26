import { redirect, useFetcher } from "react-router";
import { useInfiniteScroll } from "~/lib/useInfiniteScroll";
import { getDbUser } from "~/services/auth.server";
import { db } from "~/services/db.server";
import { checkAllUserCampaignAlgo } from "~/services/score-algo-api";
import { getUserStatistics } from "~/services/user-statistics.server";
import type { Route } from "./+types/_a_users";
import UserStatisticsComponent from "./components/UserStatistics";

type AdminUser = Route.ComponentProps["loaderData"]["users"][number];

function AdminUserRow({ user }: { user: AdminUser }) {
  return (
    <tr className="hover:bg-gray-800">
      <td className="whitespace-nowrap px-6 py-4">
        <div className="flex items-center gap-3">
          {user.image ? (
            <img
              alt={`${user.name || "User"} avatar`}
              className="h-8 w-8 rounded-full"
              src={user.image}
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 font-medium text-gray-200 text-sm">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
          )}
          <div>
            <div className="font-medium text-sm text-white">
              {user.name || "No name"}{" "}
              {user.name !== user.email && `<${user.email}>`}
            </div>
            <div className="text-gray-400 text-sm">ID: {user.id}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm text-white">
          {user.isAdmin && "Admin\t"}
          {user.isBusiness && "Enterprise"}
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        {user.kindleScore !== null ? (
          <span className="font-mono text-sm text-white">
            {user.kindleScore.toLocaleString()}
          </span>
        ) : (
          <span className="text-gray-400 text-sm">N/A</span>
        )}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        {user.walletAddress ? (
          <span className="font-mono text-sm text-white">
            {user.walletAddress}
          </span>
        ) : (
          <span className="text-gray-400 text-sm">N/A</span>
        )}
      </td>
    </tr>
  );
}

export function meta({ data }: Route.MetaArgs) {
  const totalUsers = data?.pagination?.total || 0;

  return [
    { title: "Admin - User Management - Peak AI" },
    {
      name: "description",
      content: `Peak AI admin panel for user management. View and manage ${totalUsers} users.`,
    },
    {
      name: "keywords",
      content:
        "Peak AI admin, user management, admin panel, user dashboard, users",
    },
    { name: "robots", content: "noindex, nofollow" }, // Admin pages should not be indexed
    { name: "author", content: "Peak AI" },

    // Open Graph - minimal for admin pages
    { property: "og:title", content: "Peak AI Admin - User Management" },
    {
      property: "og:description",
      content: "Administrative interface for Peak AI user management.",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Peak AI" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get("page") || "1", 10);
  const orderBy = url.searchParams.get("orderBy") || "createdAt";
  const order = url.searchParams.get("order") || "desc";
  const limit = 20; // Users per page
  const skip = (page - 1) * limit;

  // Validate orderBy field to prevent SQL injection
  const validOrderFields = [
    "createdAt",
    "name",
    "email",
    "kindleScore",
    "isAdmin",
    "isBusiness",
  ];
  const validOrders = ["asc", "desc"];

  const safeOrderBy = validOrderFields.includes(orderBy)
    ? orderBy
    : "createdAt";
  const safeOrder = validOrders.includes(order) ? order : "desc";

  const [usersResult, totalUsersCount, statisticsResult] = await Promise.all([
    db.user.findMany({
      orderBy: {
        [safeOrderBy]: safeOrder,
      },
      skip,
      take: limit,
    }),
    db.user.count(),
    getUserStatistics(),
  ]);

  const hasNextPage = skip + limit < totalUsersCount;
  const statistics = statisticsResult.isOk() ? statisticsResult.value : null;

  return {
    users: usersResult,
    statistics,
    pagination: {
      page,
      limit,
      total: totalUsersCount,
      hasNextPage,
    },
    orderBy: safeOrderBy,
    order: safeOrder,
  };
}

export async function action({ request }: Route.ActionArgs) {
  const user = await getDbUser(request);
  if (user.isErr() || !user.value.isAdmin) {
    throw redirect("/");
  }
  const formData = await request.formData();
  const actionType = formData.get("actionType");

  // Example action handling (expand as needed)
  if (actionType === "updateAllUserScore") {
    await checkAllUserCampaignAlgo();
    return { success: true, message: "User info update initiated" };
  }

  // Add user management actions here as needed
  return { success: false, message: "Unknown action" };
}

export default function AdminUsers({ loaderData }: Route.ComponentProps) {
  const {
    users: initialUsers,
    statistics,
    pagination,
    orderBy,
    order,
  } = loaderData;
  const fetcher = useFetcher<typeof loader>();
  const actionFetcher = useFetcher<typeof action>();

  const baseUri = `/admin/users?orderBy=${orderBy}&order=${order}`;
  const {
    items: users,
    hasNextPage,
    isLoadingMore,
    loadMoreRef,
  } = useInfiniteScroll({
    fetcher,
    uri: baseUri,
    initialItems: initialUsers,
    initialPagination: pagination,
    selectItems: (data) => data.users,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl text-white">User Management</h1>
          <p className="text-gray-300">
            Manage and monitor user accounts ({pagination.total} total users)
          </p>
        </div>
      </div>

      {/* Statistics Dashboard */}
      {statistics ? (
        <div>
          <h2 className="mb-4 font-semibold text-white text-xl">
            User Statistics
          </h2>
          <UserStatisticsComponent statistics={statistics} />
        </div>
      ) : (
        <div className="rounded-lg border border-red-800 bg-red-900/20 p-4">
          <p className="text-red-400">Failed to load statistics data</p>
        </div>
      )}

      {/* Admin Actions */}
      <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
        <h3 className="mb-3 font-medium text-lg text-white">Admin Actions</h3>
        <actionFetcher.Form method="post">
          <input name="actionType" type="hidden" value="updateAllUserScore" />
          <button
            className="rounded bg-purple-600 px-4 py-2 font-medium text-sm text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={actionFetcher.state !== "idle"}
            type="submit"
          >
            {actionFetcher.state !== "idle" ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                Updating...
              </div>
            ) : (
              "Update All User Score"
            )}
          </button>
        </actionFetcher.Form>
        {actionFetcher.data?.success && (
          <p className="mt-2 text-green-400 text-sm">
            {actionFetcher.data.message}
          </p>
        )}
        {actionFetcher.data?.success === false && (
          <p className="mt-2 text-red-400 text-sm">
            {actionFetcher.data.message}
          </p>
        )}
      </div>

      <div className="overflow-x-auto bg-gray-900 shadow ring-1 ring-gray-700 md:rounded-lg">
        <div className="flex justify-between px-6 py-4">
          <h2 className="font-medium text-lg text-white">All Users</h2>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-gray-300 text-sm" htmlFor="orderBy">
                Sort by:
              </label>
              <select
                className="rounded border border-gray-600 bg-gray-800 px-3 py-1 text-sm text-white focus:border-purple-500 focus:outline-none"
                id="orderBy"
                onChange={(e) => {
                  const newSearchParams = new URLSearchParams(
                    window.location.search
                  );
                  newSearchParams.set("orderBy", e.target.value);
                  newSearchParams.delete("page"); // Reset to first page
                  window.location.search = newSearchParams.toString();
                }}
                value={orderBy}
              >
                <option value="createdAt">Created Date</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="kindleScore">Kindle Score</option>
                <option value="isAdmin">Admin Status</option>
                <option value="isBusiness">Business Status</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-300 text-sm" htmlFor="order">
                Order:
              </label>
              <select
                className="rounded border border-gray-600 bg-gray-800 px-3 py-1 text-sm text-white focus:border-purple-500 focus:outline-none"
                id="order"
                onChange={(e) => {
                  const newSearchParams = new URLSearchParams(
                    window.location.search
                  );
                  newSearchParams.set("order", e.target.value);
                  newSearchParams.delete("page"); // Reset to first page
                  window.location.search = newSearchParams.toString();
                }}
                value={order}
              >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border-gray-700 border-t">
          {users.length === 0 ? (
            <div className="px-6 py-8 text-center">
              <p className="text-gray-400">No users found.</p>
            </div>
          ) : (
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                      User
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                      Kindle Score
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                      Wallet Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 bg-gray-900">
                  {users.map((user) => (
                    <AdminUserRow key={user.id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Load more trigger */}
        {hasNextPage && (
          <div className="py-8" ref={loadMoreRef}>
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
                <span>Loading more users...</span>
              </div>
            </div>
          </div>
        )}

        {/* End of results message */}
        {!hasNextPage && users.length > 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500 text-sm">
              You've reached the end of the user list.
            </p>
          </div>
        )}

        {/* Loading state for initial load */}
        {isLoadingMore && users.length === 0 && (
          <div className="flex justify-center py-8">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
              <span>Loading users...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
