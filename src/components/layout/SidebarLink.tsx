import Link from 'next/link';
import { ReactNode } from 'react';
import { useLayoutContext } from '.';

export default function SidebarLink(props: { href: string; children: ReactNode }) {
  const { href, children } = props;
  const { currentRoute } = useLayoutContext();

  const isActive = currentRoute === href;

  return (
    <Link href={href}>
      <a
        className={`sidebar-link flex items-center text-sm font-semibold h-14 rounded-xl overflow-hidden ${
          isActive ? 'bg-primary text-white' : 'bg-white text-light-text hover:text-primary'
        }`}
      >
        {children}
      </a>
    </Link>
  );
}
