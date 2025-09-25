import type { Campaign } from '@prisma/client';
import { Form, useActionData } from 'react-router';
import DialogWithCloseButton from '~/components/Dialogs/DialogWithCloseButton';
import { DynamicJSONInput } from './DynamicJSONInput';
import { ShareUrlsInput } from './ShareUrlsInput';

type ActionData =
  | { success: true; message: string }
  | { success: false; error: string };

export function CampaignModal({
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
  const actionData = useActionData<ActionData>();
  const isEdit = !!campaign;

  const formatDateForInput = (date: Date | string) => {
    const d = new Date(date);
    return d.toISOString().slice(0, 16);
  };

  return (
    <DialogWithCloseButton
      className="min-w-[80vw] max-w-4xl"
      setShow={onClose}
      show={isOpen}
      title={isEdit ? 'Edit Campaign' : 'Create Campaign'}
    >
      <Form
        className="space-y-6 overflow-y-scroll"
        encType="multipart/form-data"
        method="post"
      >
        <input
          name="intent"
          type="hidden"
          value={isEdit ? 'update' : 'create'}
        />
        {isEdit && <input name="id" type="hidden" value={campaign.id} />}

        {actionData && !actionData.success && (isOpen || !!campaign) && (
          <div className="alert alert-error">
            <svg
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Error</title>
              <path
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>{actionData.error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="form-control">
            <label className="label" htmlFor="order">
              <span className="label-text font-semibold">Display Priority</span>
            </label>
            <input
              className="input input-bordered focus:input-primary w-full"
              defaultValue={isEdit ? campaign.order : 0}
              id="order"
              min="0"
              name="order"
              type="number"
            />
            <div className="label">
              <span className="label-text-alt">Lower numbers appear first</span>
            </div>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text font-semibold">Campaign Name</span>
            </label>
            <input
              className="input input-bordered focus:input-primary w-full"
              defaultValue={isEdit ? campaign.name : ''}
              id="name"
              name="name"
              placeholder="Enter campaign name"
              required
              type="text"
            />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor="description">
            <span className="label-text font-semibold">Description</span>
            <span className="label-text-alt">Optional</span>
          </label>
          <textarea
            className="textarea textarea-bordered focus:textarea-primary w-full"
            defaultValue={isEdit ? campaign.description || '' : ''}
            id="description"
            name="description"
            placeholder="Describe your campaign..."
            rows={3}
          />
        </div>

        <div className="form-control">
          <div className="label">
            <span className="label-text font-semibold">Campaign Image</span>
          </div>
          <div className="card bg-base-200">
            <div className="card-body p-4">
              <div className="flex max-md:flex-col">
                <div className="flex flex-1 items-center gap-2">
                  {isEdit && campaign.image && (
                    <div className="mb-4">
                      <p className="label-text mb-2">Current Image</p>
                      <div className="avatar">
                        <div className="mask mask-squircle size-20">
                          <img alt="Current campaign" src={campaign.image} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="form-control">
                    <label className="label" htmlFor="image">
                      <span className="label-text">Upload New Image</span>
                    </label>
                    <input
                      accept="image/*"
                      className="file-input file-input-bordered focus:file-input-primary w-full"
                      id="image"
                      name="image"
                      type="file"
                    />
                  </div>
                </div>

                <div className="divider lg:divider-horizontal">OR</div>

                <div className="form-control flex-1">
                  <label className="label" htmlFor="imageUrl">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    className="input input-bordered focus:input-primary w-full"
                    defaultValue={isEdit ? campaign.image || '' : ''}
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="https://example.com/image.jpg"
                    type="url"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-control">
          <label className="label" htmlFor="homepageUrl">
            <span className="label-text font-semibold">Homepage URL</span>
          </label>
          <input
            className="input input-bordered focus:input-primary w-full"
            defaultValue={isEdit ? campaign.homepageUrl || '' : ''}
            id="homepageUrl"
            name="homepageUrl"
            placeholder="https://example.com"
            type="url"
          />
        </div>

        <div className="card bg-base-200">
          <div className="card-body p-4">
            <h3 className="card-title text-base">💰 Reward Pool</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="form-control">
                <label className="label" htmlFor="poolSize">
                  <span className="label-text font-semibold">Pool Size</span>
                </label>
                <input
                  className="input input-bordered focus:input-primary w-full"
                  defaultValue={isEdit ? campaign.poolSize : ''}
                  id="poolSize"
                  min="0"
                  name="poolSize"
                  placeholder="10000"
                  required
                  type="number"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="poolUnit">
                  <span className="label-text font-semibold">
                    Currency/Unit
                  </span>
                </label>
                <input
                  className="input input-bordered focus:input-primary w-full"
                  defaultValue={isEdit ? campaign.poolUnit || '' : ''}
                  id="poolUnit"
                  maxLength={10}
                  name="poolUnit"
                  placeholder="USDT, ETH, Points..."
                  type="text"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label" htmlFor="poolDescription">
                <span className="label-text font-semibold">
                  Pool Description
                </span>
                <span className="label-text-alt">Optional</span>
              </label>
              <input
                className="input input-bordered focus:input-primary w-full"
                defaultValue={isEdit ? campaign.poolDescription || '' : ''}
                id="poolDescription"
                maxLength={50}
                name="poolDescription"
                placeholder="in rewards, total prize pool, etc."
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body p-4">
            <h3 className="card-title text-base">📅 Campaign Duration</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="form-control">
                <label className="label" htmlFor="startDate">
                  <span className="label-text font-semibold">
                    Start Date & Time
                  </span>
                </label>
                <input
                  className="input input-bordered focus:input-primary w-full"
                  defaultValue={
                    isEdit ? formatDateForInput(campaign.startDate) : ''
                  }
                  id="startDate"
                  name="startDate"
                  required
                  type="datetime-local"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="endDate">
                  <span className="label-text font-semibold">
                    End Date & Time
                  </span>
                </label>
                <input
                  className="input input-bordered focus:input-primary w-full"
                  defaultValue={
                    isEdit ? formatDateForInput(campaign.endDate) : ''
                  }
                  id="endDate"
                  name="endDate"
                  required
                  type="datetime-local"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-control">
          <div className="label">
            <span className="label-text font-semibold">
              📋 Join Requirements
            </span>
            <span className="label-text-alt">
              Configure participation rules
            </span>
          </div>
          <div className="card bg-base-200">
            <div className="card-body p-4">
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
        </div>

        <div className="form-control">
          <div className="label">
            <span className="label-text font-semibold">🔗 Share URLs</span>
            <span className="label-text-alt">
              Social media and website links
            </span>
          </div>
          <div className="card bg-base-200">
            <div className="card-body p-4">
              <ShareUrlsInput
                defaultValue={
                  isEdit && campaign.shareUrls
                    ? (campaign.shareUrls as Array<{
                        url: string;
                        icon: string;
                      }>)
                    : undefined
                }
                name="shareUrls"
              />
            </div>
          </div>
        </div>

        <div className="modal-action pt-6">
          <button className="btn btn-ghost" onClick={onClose} type="button">
            Cancel
          </button>
          <button
            className="btn btn-primary"
            disabled={isSubmitting}
            type="submit"
          >
            {(() => {
              if (isSubmitting) {
                return (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Saving...
                  </>
                );
              }
              return isEdit ? '✏️ Update Campaign' : '✨ Create Campaign';
            })()}
          </button>
        </div>
      </Form>
    </DialogWithCloseButton>
  );
}
