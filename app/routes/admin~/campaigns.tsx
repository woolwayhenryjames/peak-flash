import { useState } from 'react';
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from 'react-router';
import DialogWithCloseButton from '~/components/Dialogs/DialogWithCloseButton';
import { cn } from '~/lib/utils';
import { getSessionUser } from '~/services/auth.server';
import {
  createCampaign,
  deleteCampaign,
  getAllCampaigns,
  updateCampaign,
} from '~/services/campaign.server';
import type { Route } from './+types/campaigns';

export function meta({ data }: Route.MetaArgs) {
  const campaigns = data?.campaigns || [];
  const totalCampaigns = campaigns.length;
  const activeCampaigns = campaigns.filter(
    (c) => new Date(c.endDate) > new Date()
  ).length;
  const endedCampaigns = totalCampaigns - activeCampaigns;

  return [
    { title: 'Admin - Campaign Management - Peak AI' },
    {
      name: 'description',
      content: `Peak AI admin panel for campaign management. View and manage ${totalCampaigns} campaigns (${activeCampaigns} active, ${endedCampaigns} ended). Create, edit, and monitor campaign performance.`,
    },
    {
      name: 'keywords',
      content:
        'Peak AI admin, campaign management, admin panel, campaign dashboard, create campaigns, edit campaigns, campaign analytics',
    },
    { name: 'robots', content: 'noindex, nofollow' }, // Admin pages should not be indexed
    { name: 'author', content: 'Peak AI' },

    // Open Graph - minimal for admin pages
    { property: 'og:title', content: 'Peak AI Admin - Campaign Management' },
    {
      property: 'og:description',
      content: 'Administrative interface for Peak AI campaign management.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Peak AI' },
  ];
}

interface LoaderData {
  campaigns: Array<{
    id: string;
    name: string;
    description: string | null;
    image: string | null;
    poolSize: number;
    startDate: Date;
    endDate: Date;
    joinRequirement: unknown;
    createdAt: Date;
    updatedAt: Date;
    _count: {
      campaignUsers: number;
    };
  }>;
}

type ActionData =
  | { success: true; message: string }
  | { success: false; error: string };

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getSessionUser(request);
  if (
    user.isErr() ||
    !['arslanablikim', 'user7948065599493'].includes(user.value.email)
  ) {
    throw redirect('/login');
  }

  const campaigns = await getAllCampaigns();
  return { campaigns };
}

async function handleCreateCampaign(formData: FormData) {
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const image = formData.get('image') as string;
  const poolSize = Number.parseInt(formData.get('poolSize') as string, 10);
  const startDate = new Date(formData.get('startDate') as string);
  const endDate = new Date(formData.get('endDate') as string);
  const joinRequirement = formData.get('joinRequirement') as string;

  await createCampaign({
    name,
    description: description || undefined,
    image: image || undefined,
    poolSize,
    startDate,
    endDate,
    joinRequirement: joinRequirement ? JSON.parse(joinRequirement) : undefined,
  });

  return { success: true, message: 'Campaign created successfully' };
}

async function handleUpdateCampaign(formData: FormData) {
  const id = formData.get('id') as string;
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const image = formData.get('image') as string;
  const poolSize = Number.parseInt(formData.get('poolSize') as string, 10);
  const startDate = new Date(formData.get('startDate') as string);
  const endDate = new Date(formData.get('endDate') as string);
  const joinRequirement = formData.get('joinRequirement') as string;

  await updateCampaign(id, {
    name,
    description: description || undefined,
    image: image || undefined,
    poolSize,
    startDate,
    endDate,
    joinRequirement: joinRequirement ? JSON.parse(joinRequirement) : undefined,
  });

  return { success: true, message: 'Campaign updated successfully' };
}

export async function action({ request }: Route.ActionArgs) {
  const user = await getSessionUser(request);
  if (user.isErr() || user.value.email !== 'user7948065599493') {
    throw redirect('/login');
  }

  const formData = await request.formData();
  const intent = formData.get('intent');

  try {
    if (intent === 'create') {
      return await handleCreateCampaign(formData);
    }

    if (intent === 'update') {
      return await handleUpdateCampaign(formData);
    }

    if (intent === 'delete') {
      const id = formData.get('id') as string;
      await deleteCampaign(id);
      return { success: true, message: 'Campaign deleted successfully' };
    }

    return { success: false, error: 'Invalid intent' };
  } catch (error) {
    console.error('Campaign action error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
}

type Campaign = {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  poolSize: number;
  startDate: Date;
  endDate: Date;
  joinRequirement: unknown;
  createdAt: Date;
  updatedAt: Date;
  _count: {
    campaignUsers: number;
  };
};

export default function AdminCampaigns() {
  const { campaigns } = useLoaderData<LoaderData>();
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);

  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <div className="mx-auto max-w-7xl p-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-3xl text-white">
              Campaign Management
            </h1>
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

        {actionData && !actionData.success && (
          <div className="mb-4 rounded-lg border border-red-500 bg-red-900/20 p-4 text-red-300">
            <p>{actionData.error}</p>
          </div>
        )}

        {actionData?.success && (
          <div className="mb-4 rounded-lg border border-green-500 bg-green-900/20 p-4 text-green-300">
            <p>{actionData.message}</p>
          </div>
        )}

        <div className="overflow-hidden bg-gray-900 shadow ring-1 ring-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                  Name
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                  Pool Size
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                  Participants
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                  End Date
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                  Status
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 bg-gray-900">
              {campaigns.map((campaign: Campaign) => {
                const now = new Date();
                const startDate = new Date(campaign.startDate);
                const endDate = new Date(campaign.endDate);
                let status = 'upcoming';

                if (now >= startDate && now <= endDate) {
                  status = 'active';
                } else if (now > endDate) {
                  status = 'ended';
                }

                return (
                  <tr className="hover:bg-gray-800" key={campaign.id}>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        {campaign.image && (
                          <img
                            alt=""
                            className="h-10 w-10 rounded-full object-cover"
                            src={campaign.image}
                          />
                        )}
                        <div className={cn('ml-4', !campaign.image && 'ml-0')}>
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
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-white">
                      ${campaign.poolSize.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-white">
                      {campaign._count.campaignUsers}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-300 text-sm">
                      {startDate.toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-300 text-sm">
                      {endDate.toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={cn(
                          'inline-flex rounded-full px-2 py-1 font-semibold text-xs',
                          {
                            'bg-green-900/30 text-green-300':
                              status === 'active',
                            'bg-yellow-900/30 text-yellow-300':
                              status === 'upcoming',
                            'bg-gray-700 text-gray-300': status === 'ended',
                          }
                        )}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right font-medium text-sm">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="text-indigo-400 hover:text-indigo-300"
                          onClick={() => setEditingCampaign(campaign)}
                          type="button"
                        >
                          Edit
                        </button>
                        <Form className="inline" method="post">
                          <input name="intent" type="hidden" value="delete" />
                          <input name="id" type="hidden" value={campaign.id} />
                          <button
                            className="text-red-400 hover:text-red-300 disabled:opacity-50"
                            disabled={isSubmitting}
                            onClick={(e) => {
                              if (
                                !confirm(
                                  'Are you sure you want to delete this campaign?'
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
      </div>

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
        />
      )}
    </>
  );
}

// Dynamic JSON Input Component
function DynamicJSONInput({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue?: Record<string, unknown>;
}) {
  const defaultJoinRequirement = {
    'Required Tags': ['InfinityGround', 'Web3IDE', 'AIDevelopment'],
    'Content Requirements':
      '- Must include a brief overview of InfinityGround and its features.\n- Highlight the benefits of using Web3IDE for AI development.\n- Include a call-to-action encouraging users to try out InfinityGround.',
  };

  const [jsonData, setJsonData] = useState<Record<string, unknown>>(
    defaultValue || defaultJoinRequirement
  );
  const [newFieldKey, setNewFieldKey] = useState('');

  const addNewField = () => {
    if (newFieldKey && !jsonData[newFieldKey]) {
      setJsonData((prev) => ({
        ...prev,
        [newFieldKey]: '',
      }));
      setNewFieldKey('');
    }
  };

  const removeField = (key: string) => {
    setJsonData((prev) => {
      const newData = { ...prev };
      delete newData[key];
      return newData;
    });
  };

  const updateField = (key: string, value: unknown) => {
    setJsonData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateKey = (oldKey: string, newKey: string) => {
    if (newKey && newKey !== oldKey && !jsonData[newKey]) {
      setJsonData((prev) => {
        const newData = { ...prev };
        newData[newKey] = prev[oldKey];
        delete newData[oldKey];
        return newData;
      });
    }
  };

  const renderValueInput = (key: string, value: unknown) => {
    if (Array.isArray(value)) {
      return (
        <div className="space-y-2">
          {value.map((item, index) => (
            <div className="flex gap-2" key={`${key}-item-${index}`}>
              <input
                className="flex-1 rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
                onChange={(e) => {
                  const newArray = [...value];
                  newArray[index] = e.target.value;
                  updateField(key, newArray);
                }}
                placeholder={`Item ${index + 1}`}
                type="text"
                value={item as string}
              />
              <button
                className="rounded-md bg-red-600 px-3 py-2 text-white text-xs hover:bg-red-700"
                onClick={() => {
                  const newArray = value.filter((_, i) => i !== index);
                  updateField(key, newArray);
                }}
                type="button"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="rounded-md bg-green-600 px-3 py-1 text-white text-xs hover:bg-green-700"
            onClick={() => {
              updateField(key, [...value, '']);
            }}
            type="button"
          >
            Add Item
          </button>
        </div>
      );
    }

    if (typeof value === 'string' && value.includes('\n')) {
      return (
        <textarea
          className="w-full rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
          onChange={(e) => updateField(key, e.target.value)}
          rows={4}
          value={value}
        />
      );
    }

    return (
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
          onChange={(e) => updateField(key, e.target.value)}
          type="text"
          value={value as string}
        />
        <button
          className="rounded-md bg-blue-600 px-3 py-2 text-white text-xs hover:bg-blue-700"
          onClick={() => {
            updateField(key, [value as string]);
          }}
          type="button"
        >
          Convert to Array
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {Object.entries(jsonData).map(([key, value]) => (
          <div className="rounded-lg border border-gray-600 p-4" key={key}>
            <div className="mb-3 flex items-center gap-2">
              <input
                className="flex-1 rounded-md border-gray-600 bg-gray-700 px-3 py-2 font-medium text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
                defaultValue={key}
                onBlur={(e) => updateKey(key, e.target.value)}
                placeholder="Field name"
                type="text"
              />
              <button
                className="rounded-md bg-red-600 px-3 py-2 text-white text-xs hover:bg-red-700"
                onClick={() => removeField(key)}
                type="button"
              >
                Remove Field
              </button>
            </div>
            {renderValueInput(key, value)}
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-gray-500 border-dashed p-4">
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
            onChange={(e) => setNewFieldKey(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addNewField();
              }
            }}
            placeholder="New field name"
            type="text"
            value={newFieldKey}
          />
          <button
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
            onClick={addNewField}
            type="button"
          >
            Add Field
          </button>
        </div>
      </div>

      {/* Hidden input that contains the JSON data */}
      <input name={name} type="hidden" value={JSON.stringify(jsonData)} />
    </div>
  );
}

function CampaignModal({
  campaign,
  isOpen,
  onClose,
  isSubmitting,
}: {
  campaign: Campaign | null;
  isOpen: boolean;
  onClose: () => void;
  isSubmitting: boolean;
}) {
  const isEdit = !!campaign;

  const formatDateForInput = (date: Date | string) => {
    const d = new Date(date);
    return d.toISOString().slice(0, 16);
  };

  return (
    <DialogWithCloseButton
      className="min-w-[80vw]"
      setShow={onClose}
      show={isOpen}
      title={isEdit ? 'Edit Campaign' : 'Create Campaign'}
    >
      <Form className="space-y-4" method="post">
        <input
          name="intent"
          type="hidden"
          value={isEdit ? 'update' : 'create'}
        />
        {isEdit && <input name="id" type="hidden" value={campaign.id} />}

        <div>
          <label
            className="block font-medium text-gray-300 text-sm"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-400 focus:ring-indigo-400 sm:text-sm"
            defaultValue={isEdit ? campaign.name : ''}
            id="name"
            name="name"
            required
            type="text"
          />
        </div>

        <div>
          <label
            className="block font-medium text-gray-300 text-sm"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={isEdit ? campaign.description || '' : ''}
            id="description"
            name="description"
            rows={3}
          />
        </div>

        <div>
          <label
            className="block font-medium text-gray-300 text-sm"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={isEdit ? campaign.image || '' : ''}
            id="image"
            name="image"
            type="url"
          />
        </div>

        <div>
          <label
            className="block font-medium text-gray-300 text-sm"
            htmlFor="poolSize"
          >
            Pool Size ($)
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={isEdit ? campaign.poolSize : ''}
            id="poolSize"
            min="0"
            name="poolSize"
            required
            type="number"
          />
        </div>

        <div>
          <label
            className="block font-medium text-gray-300 text-sm"
            htmlFor="startDate"
          >
            Start Date
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={isEdit ? formatDateForInput(campaign.startDate) : ''}
            id="startDate"
            name="startDate"
            required
            type="datetime-local"
          />
        </div>

        <div>
          <label
            className="block font-medium text-gray-300 text-sm"
            htmlFor="endDate"
          >
            End Date
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={isEdit ? formatDateForInput(campaign.endDate) : ''}
            id="endDate"
            name="endDate"
            required
            type="datetime-local"
          />
        </div>

        <div>
          <label
            className="block font-medium text-gray-300 text-sm"
            htmlFor="joinRequirement"
          >
            Join Requirements
          </label>
          <div className="mt-1">
            <DynamicJSONInput
              defaultValue={
                isEdit && campaign.joinRequirement
                  ? (campaign.joinRequirement as Record<string, unknown>)
                  : undefined
              }
              name="joinRequirement"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            className="rounded-md border border-gray-600 bg-gray-800 px-4 py-2 font-medium text-gray-300 text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-indigo-600 px-4 py-2 font-medium text-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
            disabled={isSubmitting}
            type="submit"
          >
            {(() => {
              if (isSubmitting) {
                return 'Saving...';
              }
              return isEdit ? 'Update' : 'Create';
            })()}
          </button>
        </div>
      </Form>
    </DialogWithCloseButton>
  );
}
