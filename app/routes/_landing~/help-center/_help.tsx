import { useState } from 'react';
import FollowUs from '~/components/FollowUs';
import GlowContainer from '~/components/GlowContainer';
import aiDetectionIcon from './assets/ai-detection-icon.svg';
import bg from './assets/bg.avif';
import hierarchyIcon from './assets/hierarchy-icon.svg';
import moneyReceiveIcon from './assets/money-receive-icon.svg';
import faqIcon from './assets/notification-square.svg';
import penToolIcon from './assets/pen-tool-icon.svg';
import smsBoldIcon from './assets/sms-bold-icon.svg';
import smsNotificationIcon from './assets/sms-notification-icon.svg';

export default function Help() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('ask@takeapeak.ai');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#03020a] via-31% via-[#10191b] to-[#030306] pb-24">
      {/* Smart Reminder Header */}
      <div
        className="flex aspect-390/131 w-full items-center gap-3 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="white-gradient-text pl-10 font-medium text-2xl tracking-tight">
          Help Center
        </h1>
      </div>
      {/* Need Help Section */}
      <div className="m-5 rounded-2xl border border-white/10 bg-linear-124 from-[#292929]/40 to-[#191616]/40 p-9">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <img alt="email" className="z-10 h-15 w-19" src={smsBoldIcon} />
          <div className="space-y-3">
            <h2 className="white-gradient-text font-medium text-xl">
              Need Help?
            </h2>
            <p className="white-gradient-text text-xs leading-[1.5]">
              We're here to help you with any questions or issues
            </p>
          </div>
        </div>

        {/* Email Support Section */}
        <div className="mt-10 space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <img
                alt=""
                className="h-[21px] w-[21px]"
                src={smsNotificationIcon}
              />
              <h3 className="font-medium text-sm text-white">Email Support</h3>
            </div>
            <p className="text-[#A6A6A6] text-xs">Get help via email</p>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="flex h-10 flex-1 items-center rounded border-[#313136] border-[0.5px] px-[11px]">
              <span className="text-[#6E6E6E] text-xs">ask@takeapeak.ai</span>
            </div>
            <button onClick={handleCopyLink} type="button">
              <GlowContainer className="rounded-sm px-2 py-px">
                {isCopied ? 'Copied' : 'Copy'}
              </GlowContainer>
            </button>
          </div>
        </div>
      </div>

      <FollowUs />

      {/* FAQ Section */}
      <div>
        {/* Header */}
        <div className="flex items-center gap-1 px-4 py-7">
          <img alt="Git branch icon" className="h-6 w-6" src={faqIcon} />
          <h3 className="white-gradient-text font-medium text-xl">
            Frequently Asked Questions
          </h3>
        </div>
        {/* FAQ Items */}
        {faqs.map((faq) => (
          <div
            className="space-y-4 border-[#3F3F42] border-y px-10 py-8"
            key={faq.question}
          >
            <div className="flex items-start gap-6">
              <img alt="" className="flex-shrink-0" src={faq.icon} />
              <h4 className="font-medium text-white text-xl leading-[1.3]">
                {faq.question}
              </h4>
            </div>
            <p className="pl-[44px] text-[#DADADA] text-xs leading-[1.5]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: 'How does AI auto-detection work?',
    answer:
      'Our AI system automatically monitors your TikTok account and detects videos that match campaign requirements within 24 hours. Make sure to use relevant hashtags to improve detection accuracy.',
    icon: aiDetectionIcon,
  },
  {
    question: 'How do I earn rewards?',
    answer:
      'Participate in campaigns by posting TikTok videos that meet the requirements. Your Spark Point is calculated based on video performance, and rewards are distributed accordingly.',
    icon: moneyReceiveIcon,
  },
  {
    question: 'How does the referral system work?',
    answer:
      "Invite friends using your unique referral link. You'll earn 10% of their rewards from campaigns. The more friends you invite, the more passive income you can generate.",
    icon: penToolIcon,
  },
  {
    question: "What if my video isn't detected?",
    answer:
      "If your video isn't automatically detected within 24 hours, you can manually submit the TikTok link in the campaign details page. Our team will review it within 48 hours.",
    icon: hierarchyIcon,
  },
];
