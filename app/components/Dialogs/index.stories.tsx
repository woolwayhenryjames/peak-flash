import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import DialogWithCloseButton from './DialogWithCloseButton';
import Dialog, { type DialogProps } from './index';
import MobileBottomDialog from './MobileBottomDialog';

const meta = {
  title: 'Dialogs',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A modal dialog component with customizable title and content.',
      },
    },
  },
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Whether the dialog is visible',
    },
    setShow: {
      action: 'setShow',
      description: 'Function to control dialog visibility',
    },
    title: {
      control: 'text',
      description: 'Dialog title (can be React node)',
    },
    children: {
      control: 'text',
      description: 'Dialog content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    topLayer: {
      control: 'boolean',
      description: 'Whether to show as modal (blocks interaction with page)',
    },
  },
  args: {
    setShow: fn(),
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const DialogTemplate = (args: Story['args']) => {
  const [, setArgs] = useArgs();

  const handleSetShow = (show: boolean) => {
    args.setShow?.(show);
    setArgs({ show });
  };

  return (
    <div>
      <button
        className="btn btn-primary mb-4"
        onClick={() => handleSetShow(true)}
        type="button"
      >
        Open Dialog
      </button>
      <Dialog {...args} setShow={handleSetShow}>
        {args.children}
      </Dialog>
    </div>
  );
};

export const Default: Story = {
  render: DialogTemplate,
  args: {
    show: false,
    title: 'Dialog Title',
    children: 'This is the dialog content. You can put any React content here.',
    topLayer: false,
  },
};

// DialogWithCloseButton Stories
type DialogWithCloseButtonProps = DialogProps & {
  type?: 'white' | 'black';
  closeButtonClassName?: string;
};

const DialogWithCloseButtonTemplate = (args: DialogWithCloseButtonProps) => {
  const [, setArgs] = useArgs();

  const handleSetShow = (show: boolean) => {
    args.setShow(show);
    setArgs({ show });
  };

  return (
    <div>
      <button
        className="btn btn-primary mb-4"
        onClick={() => handleSetShow(true)}
        type="button"
      >
        Open Dialog with Close Button
      </button>
      <DialogWithCloseButton {...args} setShow={handleSetShow}>
        {args.children}
      </DialogWithCloseButton>
    </div>
  );
};

export const WithCloseButton: StoryObj<DialogWithCloseButtonProps> = {
  render: DialogWithCloseButtonTemplate,
  args: {
    show: false,
    title: 'Dialog with Close Button',
    children:
      'This dialog has a close button in the top-right corner. You can click it to close the dialog.',
    type: 'white',
    topLayer: false,
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['white', 'black'],
      description: 'Dialog style theme',
    },
    closeButtonClassName: {
      control: 'text',
      description: 'Additional CSS classes for the close button',
    },
  },
};

export const WithCloseButtonBlackStyle: StoryObj<DialogWithCloseButtonProps> = {
  render: DialogWithCloseButtonTemplate,
  args: {
    show: false,
    title: 'Black Style Dialog',
    children: 'This is a dialog with black styling and a close button.',
    type: 'black',
    topLayer: false,
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['white', 'black'],
      description: 'Dialog style theme',
    },
    closeButtonClassName: {
      control: 'text',
      description: 'Additional CSS classes for the close button',
    },
  },
};

// MobileBottomDialog Stories
const MobileBottomDialogTemplate = (args: DialogProps) => {
  const [, setArgs] = useArgs();

  const handleSetShow = (show: boolean) => {
    args.setShow(show);
    setArgs({ show });
  };

  return (
    <div>
      <button
        className="btn btn-primary mb-4"
        onClick={() => handleSetShow(true)}
        type="button"
      >
        Open Mobile Bottom Dialog
      </button>
      <MobileBottomDialog {...args} setShow={handleSetShow}>
        {args.children}
      </MobileBottomDialog>
    </div>
  );
};

export const MobileBottom: Story = {
  render: MobileBottomDialogTemplate,
  args: {
    show: false,
    title: 'Mobile Bottom Dialog',
    children:
      'This is a mobile-optimized dialog that appears at the bottom of the screen.',
    topLayer: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story:
          'A dialog component optimized for mobile devices, appearing at the bottom of the screen.',
      },
    },
  },
};
