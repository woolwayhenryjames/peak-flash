import GlowContainer from '~/components/GlowContainer';
import aiRobotIcon from '../assets/ai-robot-icon.svg';
import coinIcon from '../assets/coin-icon.svg';
import peopleIcon from '../assets/people-icon.svg';

interface Feature {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: aiRobotIcon,
    iconAlt: 'AI Robot',
    title: 'AI smart detection',
    description: '24/7 auto-monitor your TikTok content',
  },
  {
    icon: coinIcon,
    iconAlt: 'Coin',
    title: 'Real token rewards',
    description: 'Earn project tokens,not just poins',
  },
  {
    icon: peopleIcon,
    iconAlt: 'People',
    title: '10% score rewards',
    description: 'Invite friends, earn scoring rewards',
  },
];

export default function FeatureItems() {
  return (
    <div className="mx-auto grid w-fit gap-8 lg:grid-cols-3">
      {features.map((feature) => (
        <div
          className="flex items-center gap-6 lg:flex-col lg:items-start lg:text-center"
          key={feature.iconAlt}
        >
          <GlowContainer className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-white/50 bg-transparent shadow-[0_0_1.8px_0_rgba(64,64,64,0.2),0_0_3.6px_0_rgba(64,64,64,0.2),0_0_12.6px_0_rgba(64,64,64,0.2),0_0_25.2px_0_rgba(64,64,64,0.2),0_0_43.2px_0_rgba(64,64,64,0.2),0_0_75.6px_0_rgba(64,64,64,0.2)] lg:mx-auto lg:mb-4">
            <img alt={feature.iconAlt} className="h-7 w-7" src={feature.icon} />
          </GlowContainer>
          <div className="flex-1 lg:flex-none">
            <h3 className="mb-2 font-medium font-poppins text-lg text-white">
              {feature.title}
            </h3>
            <p className="font-poppins text-[#979797] text-xs leading-5">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
