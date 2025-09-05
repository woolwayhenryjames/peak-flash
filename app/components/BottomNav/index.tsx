import { Link, useLocation } from 'react-router';
import homeIcon from './assets/home-icon.svg';
import homeIconActive from './assets/home-icon-active.svg';
import rocketIcon from './assets/rocket-icon.svg';
import rocketIconActive from './assets/rocket-icon-active.svg';
import userIcon from './assets/user-icon.svg';
import userIconActive from './assets/user-icon-active.svg';
import usersIcon from './assets/users-icon.svg';
import usersIconActive from './assets/users-icon-active.svg';

interface NavItem {
  href: string;
  icon: string;
  activeIcon: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', icon: homeIcon, activeIcon: homeIconActive, label: 'Home' },
  {
    href: '/ascent',
    icon: rocketIcon,
    activeIcon: rocketIconActive,
    label: 'Ascent',
  },
  {
    href: '/invite',
    icon: usersIcon,
    activeIcon: usersIconActive,
    label: 'Invite',
  },
  {
    href: '/profile',
    icon: userIcon,
    activeIcon: userIconActive,
    label: 'Profile',
  },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed right-0 bottom-0 left-0 border-white/10 border-t bg-black/20 backdrop-blur-sm">
        <div className="grid grid-cols-4 py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                }`}
                key={item.href}
                to={item.href}
              >
                <img
                  alt={`${item.label} icon`}
                  className="h-6 w-6 transition-all duration-200"
                  src={isActive ? item.activeIcon : item.icon}
                />
                <span className="font-normal text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Padding for Fixed Navigation */}
      <div className="h-20" />
    </>
  );
}
