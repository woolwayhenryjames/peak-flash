import { err, ok } from 'neverthrow';
import { db } from './db.server';

export const getUserInviteRecords = async (userId: string) => {
  const inviteRecords = await db.user.findMany({
    where: {
      inviterId: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return inviteRecords.map((record) => ({
    ...record,
    timeAgo: getTimeAgo(record.createdAt),
    avatar: record.image || getInitials(record.name || record.email),
  }));
};

export const getUserInviteStats = async (userId: string) => {
  const inviteCount = await db.user.count({
    where: {
      inviterId: userId,
    },
  });

  return {
    inviteCount,
    rewardRate: 10, // 10% as defined in the business logic
  };
};

// Helper function to get time ago string
function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInWeeks = Math.floor(diffInDays / 7);

  if (diffInDays === 0) {
    return 'Today';
  }
  if (diffInDays === 1) {
    return '1 day ago';
  }
  if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  }
  if (diffInWeeks === 1) {
    return '1 week ago';
  }
  return `${diffInWeeks} weeks ago`;
}

// Helper function to get initials from name
function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

// Invite-related functions
export const validateInviteCode = async (inviterId: string) => {
  try {
    const inviter = await db.user.findUnique({
      where: { id: inviterId },
      select: { id: true },
    });
    return inviter ? ok(inviter) : err(new Error('inviter not found'));
  } catch (error) {
    return err(error as Error);
  }
};

export const processInviteSignup = async (
  newUserId: string,
  inviterId: string
) => {
  try {
    // Update the new user with the inviter relationship
    const user = await db.user.update({
      where: { id: newUserId },
      data: { inviterId },
    });

    return ok(user);
  } catch (error) {
    console.error('Error processing invite signup:', error);
    return err(error);
  }
};
