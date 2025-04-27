'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/', icon: 'location_on', label: 'Track' },
  { href: '/history', icon: 'history', label: 'History' },
  { href: '/settings', icon: 'settings', label: 'Settings' },
];

export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-base-100 border-t border-neutral flex justify-around items-center h-16 shadow-inner">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center text-xs ${
              isActive ? 'text-accent' : 'text-primary-content'
            }`}
          >
            <span className="material-symbols-rounded text-2xl">{tab.icon}</span>
            <span className="text-[10px] mt-1">{tab.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
