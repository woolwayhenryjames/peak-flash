import { useEffect, useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router";
import { cn, formatNumber } from "~/lib/utils";
import { getDbUser } from "~/services/auth.server";
import {
  createCampaign,
  deleteCampaign,
  getAllCampaigns,
  updateCampaign,
} from "~/services/campaign.server";
import { logger } from "~/services/logger.server";
import { getAllBusinessUsers } from "~/services/user.server";
import type { Route } from "./+types/_a_campaign";
import { CampaignModal } from "./components/CampaignModal";
import { transformFormData } from "./transformFormData";

export function meta({ data }: Route.MetaArgs) {
  const campaigns = data?.campaigns || [];
  const totalCampaigns = campaigns.length;
  const activeCampaigns = campaigns.filter(
    (c) => new Date(c.endDate) > new Date()
  ).length;
  const endedCampaigns = totalCampaigns - activeCampaigns;

  return [
    { title: "Admin - Campaign Management - Peak AI" },
    {
      name: "description",
      content: `Peak AI admin panel for campaign management. View and manage ${totalCampaigns} campaigns (${activeCampaigns} active, ${endedCampaigns} ended). Create, edit, and monitor campaign performance.`,
    },
    {
      name: "keywords",
      content:
        "Peak AI admin, campaign management, admin panel, campaign dashboard, create campaigns, edit campaigns, campaign analytics",
    },
    { name: "robots", content: "noindex, nofollow" }, // Admin pages should not be indexed
    { name: "author", content: "Peak AI" },

    // Open Graph - minimal for admin pages
    { property: "og:title", content: "Peak AI Admin - Campaign Management" },
    {
      property: "og:description",
      content: "Administrative interface for Peak AI campaign management.",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Peak AI" },
  ];
}

type ActionData =
  | { success: true; message: string }
  | { success: false; error: string };

export async function loader() {
  const campaigns = await getAllCampaigns();
  const usersResult = await getAllBusinessUsers();

  return {
    campaigns,
    users: usersResult.isOk() ? usersResult.value : [],
  };
}

export async function action({ request }: Route.ActionArgs) {
  const user = await getDbUser(request);
  if (user.isErr() || !user.value.isAdmin) {
    throw redirect("/");
  }
  const { intent, id, data } = await transformFormData(request);
  try {
    if (intent === "create") {
      if (!data.name) {
        return { success: false, error: "Campaign name is required" };
      }
      if (!(data.startDate && data.endDate)) {
        return {
          success: false,
          error: "Start date and end date are required",
        };
      }
      await createCampaign({
        ...data,
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
      });
      return { success: true, message: "Campaign created successfully" };
    }

    if (intent === "update" && id) {
      if (!data.name) {
        return { success: false, error: "Campaign name is required" };
      }
      if (!(data.startDate && data.endDate)) {
        return {
          success: false,
          error: "Start date and end date are required",
        };
      }
      await updateCampaign(id, {
        ...data,
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
      });
      return { success: true, message: "Campaign updated successfully" };
    }

    if (intent === "delete" && id) {
      await deleteCampaign(id);
      return { success: true, message: "Campaign deleted successfully" };
    }

    return { success: false, error: "Invalid intent" };
  } catch (error) {
    logger.error("Campaign action error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
}

export default function AdminCampaigns({
  loaderData: { campaigns, users },
}: Route.ComponentProps) {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<
    (typeof campaigns)[number] | null
  >(null);

  const isSubmitting = navigation.state === "submitting";

  // Close modal on successful submission
  useEffect(() => {
    if (actionData?.success && !isSubmitting) {
      setIsCreateModalOpen(false);
      setEditingCampaign(null);
    }
  }, [actionData?.success, isSubmitting]);

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl text-white">Campaign Management</h1>
          <p className="text-gray-300">
            Manage campaigns, view participants, and track performance
          </p>
        </div>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => setIsCreateModalOpen(true)}
          type="button"
        >
          Create Campaign
        </button>
      </div>

      {actionData &&
        !actionData.success &&
        !isCreateModalOpen &&
        !editingCampaign && (
          <div className="mb-4 rounded-lg border border-red-500 bg-red-900/20 p-4 text-red-300">
            <p>{actionData.error}</p>
          </div>
        )}

      {actionData?.success && !isCreateModalOpen && !editingCampaign && (
        <div className="mb-4 rounded-lg border border-green-500 bg-green-900/20 p-4 text-green-300">
          <p>{actionData.message}</p>
        </div>
      )}

      <div className="overflow-x-auto bg-gray-900 shadow ring-1 ring-gray-700 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3">
                <span className="sr-only">Order</span>
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Name
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Owner
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Pool Size
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Participants
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Start Date
                <br />
                End Date
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                Status
              </th>
              <th className="w-32 px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-gray-900">
            {campaigns.map((campaign) => {
              const now = new Date();
              const startDate = new Date(campaign.startDate);
              const endDate = new Date(campaign.endDate);
              let status = "upcoming";

              if (now >= startDate && now <= endDate) {
                status = "active";
              } else if (now > endDate) {
                status = "ended";
              }

              return (
                <tr className="hover:bg-gray-800" key={campaign.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-white">
                    {campaign.order}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      {campaign.image && (
                        <img
                          alt=""
                          className="h-10 w-10 rounded-full object-cover"
                          src={campaign.image}
                        />
                      )}
                      <div className={cn("ml-4", !campaign.image && "ml-0")}>
                        <div className="font-medium text-sm text-white">
                          {campaign.name}
                        </div>
                        {campaign.description && (
                          <div className="max-w-xs truncate text-gray-300 text-sm">
                            {campaign.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {campaign.owner ? (
                      <div className="flex items-center">
                        {campaign.owner.image && (
                          <img
                            alt=""
                            className="h-8 w-8 rounded-full object-cover"
                            src={campaign.owner.image}
                          />
                        )}
                        <div
                          className={cn(
                            "ml-2",
                            !campaign.owner.image && "ml-0"
                          )}
                        >
                          <div className="text-sm text-white">
                            {campaign.owner.name || campaign.owner.email}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {campaign.owner.email}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">No owner</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-white">
                    $&nbsp;{formatNumber(campaign.poolSize)}
                    {campaign.poolUnit && ` in ${campaign.poolUnit}`}
                    {campaign.poolDescription && (
                      <div className="text-gray-400 text-xs">
                        {campaign.poolDescription}
                      </div>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-white">
                    {campaign._count.campaignUsers}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-gray-300 text-sm">
                    {startDate.toLocaleDateString()}
                    <br />
                    {endDate.toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-1 font-semibold text-xs",
                        {
                          "bg-green-900/30 text-green-300": status === "active",
                          "bg-yellow-900/30 text-yellow-300":
                            status === "upcoming",
                          "bg-gray-700 text-gray-300": status === "ended",
                        }
                      )}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="w-32 whitespace-nowrap px-6 py-4 text-right font-medium text-sm">
                    <div className="flex min-w-fit items-center justify-end gap-3">
                      <button
                        className="shrink-0 text-indigo-400 hover:text-indigo-300"
                        onClick={() => setEditingCampaign(campaign)}
                        type="button"
                      >
                        Edit
                      </button>
                      <Form className="inline shrink-0" method="post">
                        <input name="intent" type="hidden" value="delete" />
                        <input name="id" type="hidden" value={campaign.id} />
                        <button
                          className="text-red-400 hover:text-red-300 disabled:opacity-50"
                          disabled={isSubmitting}
                          onClick={(e) => {
                            if (
                              // biome-ignore lint/suspicious/noAlert: admin only page it's fine
                              !confirm(
                                "Are you sure you want to delete this campaign?"
                              )
                            ) {
                              e.preventDefault();
                            }
                          }}
                          type="submit"
                        >
                          Delete
                        </button>
                      </Form>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {campaigns.length === 0 && (
        <div className="py-12 text-center">
          <h3 className="mt-2 font-semibold text-sm text-white">
            No campaigns
          </h3>
          <p className="mt-1 text-gray-300 text-sm">
            Get started by creating a new campaign.
          </p>
        </div>
      )}

      {/* Create/Edit Campaign Modal */}
      {(isCreateModalOpen || editingCampaign) && (
        <CampaignModal
          campaign={editingCampaign}
          isOpen={isCreateModalOpen || !!editingCampaign}
          isSubmitting={isSubmitting}
          onClose={() => {
            setIsCreateModalOpen(false);
            setEditingCampaign(null);
          }}
          users={users}
        />
      )}
    </>
  );
}
