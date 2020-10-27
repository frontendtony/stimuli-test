import Link from 'next/link';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useState } from 'react';
import styled from 'styled-components';
import {
  CampaignsIcon,
  CommentsIcon,
  InboxIcon,
  NotificationsIcon,
  OverviewIcon,
  PayoutsIcon,
  ProductsIcon,
  SchedulesIcon,
  SettingsIcon,
  StatementIcon,
  UserProfileIcon,
} from '../icons';
import SidebarLink from './SidebarLink';

const LayoutContext = createContext({
  isSidebarExpanded: false,
  currentRoute: '/',
});

export default function Layout(props: { children: ReactNode }) {
  const { children } = props;

  const router = useRouter();
  const currentRoute = router.asPath;

  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const toggleSidebar = () => setSidebarExpanded(!isSidebarExpanded);

  return (
    <LayoutContext.Provider value={{ isSidebarExpanded, currentRoute }}>
      <StyledLayoutPage className="min-h-screen flex flex-col flex-grow" data-testid="app">
        <div
          className={`sidebar w-sidebar md:${
            isSidebarExpanded ? 'max-w-sidebar' : 'max-w-sidebar-collapsed'
          } lg:max-w-sidebar fixed top-0 left-0 h-screen overflow-y-auto border-r border-gray-border z-10`}
        >
          <div
            className={`sidebar-header flex items-center p-5 lg:pt-12 sticky top-0 z-10 bg-white ${
              isSidebarExpanded ? 'tablet:border-b-0' : 'tablet:justify-center'
            } border-b border-gray-border lg:border-b-0 justify-between h-sidebar-collapsed`}
          >
            <div className={`${isSidebarExpanded ? '' : 'tablet:w-0'} flex items-center`}>
              <img src="/images/logo.png" alt="Unity logo" className="pl-5 hidden lg:block" />
              <img src="/images/logo-small.png" alt="Unity logo" className="pl-5 lg:hidden" />
            </div>
            <button onClick={toggleSidebar} className="lg:hidden">
              <svg
                width="32"
                height="20"
                viewBox="0 0 32 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="5" width="32" height="2" rx="1" fill="#1B1D21" />
                <rect y="13" width="32" height="2" rx="1" fill="#1B1D21" />
              </svg>
            </button>
          </div>
          <div className="sidebar-menu px-5">
            <div className="py-5">
              <h2
                className={`text-light-text mb-4 font-medium text-xs pl-5 ${
                  isSidebarExpanded ? 'pl-5' : 'tablet:pl-0 tablet:text-center'
                }`}
              >
                Admin
                <span className={`${isSidebarExpanded ? '' : 'tablet:hidden'}`}>&nbsp;tools</span>
              </h2>
              <div className="flex flex-col">
                {adminToolsLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <SidebarLink href={link.href} key={link.href}>
                      <div
                        className={`mr-5 pl-5 ${
                          isSidebarExpanded
                            ? 'pl-5 mr-4'
                            : 'tablet:h-14 tablet:w-14 tablet:mr-5 tablet:pl-4'
                        } flex items-center justify-center`}
                      >
                        <Icon />
                      </div>
                      <span className="ml-px">{link.text}</span>
                    </SidebarLink>
                  );
                })}
              </div>
            </div>
            <hr className="h-px bg-gray-border mx-5 my-4" />
            <div className="py-5 mb-5">
              <h2
                className={`text-light-text pl-5 mb-4 font-medium text-xs ${
                  isSidebarExpanded ? 'pl-5' : 'tablet:pl-0 tablet:text-center'
                }`}
              >
                Insights
              </h2>
              <div className="flex flex-col">
                <SidebarLink href="/inbox">
                  <div
                    className={`mr-5 pl-5 ${
                      isSidebarExpanded
                        ? 'pl-5 mr-4'
                        : 'tablet:h-14 tablet:w-14 tablet:mr-5 tablet:pl-4'
                    } flex items-center justify-center`}
                  >
                    <InboxIcon />
                  </div>
                  <span>Inbox</span>
                </SidebarLink>
                <SidebarLink href="/notifications">
                  <div
                    className={`mr-5 pl-5 ${
                      isSidebarExpanded
                        ? 'pl-5 mr-4'
                        : 'tablet:h-14 tablet:w-14 tablet:mr-5 tablet:pl-4'
                    } flex items-center justify-center`}
                  >
                    <NotificationsIcon />
                  </div>
                  <span>Notifications</span>
                </SidebarLink>
                <SidebarLink href="/comments">
                  <div
                    className={`mr-5 pl-5 ${
                      isSidebarExpanded
                        ? 'pl-5 mr-4'
                        : 'tablet:h-14 tablet:w-14 tablet:mr-5 tablet:pl-4'
                    } flex items-center justify-center`}
                  >
                    <CommentsIcon />
                  </div>
                  <span>Comments</span>
                </SidebarLink>
              </div>
            </div>
            <div className="py-5 mb-5">
              <Link href="profile">
                <a
                  className={`flex items-center text-sm font-semibold h-14 rounded-xl ${
                    router.asPath === '/profile' ? 'bg-primary-accent text-white' : 'bg-white'
                  } group overflow-hidden hover:bg-primary-accent hover:text-white`}
                >
                  <img
                    src="/images/user-avatar.png"
                    alt="user avatar"
                    className={`mr-5 pl-5 ${
                      isSidebarExpanded
                        ? 'pl-5 mr-4'
                        : 'tablet:h-10 tablet:w-10 tablet:box-content tablet:mr-5 tablet:pl-2'
                    } flex items-center justify-center`}
                  />
                  <div className="flex flex-col">
                    <span
                      className={`${
                        router.asPath === '/profile' ? 'text-current' : 'text-default-text'
                      } group-hover:text-current font-semibold text-sm`}
                    >
                      Tam Tran
                    </span>
                    <span
                      className={`${
                        router.asPath === '/profile' ? 'text-current' : 'text-light-text'
                      }  group-hover:text-current font-semibold text-xs truncate`}
                    >
                      Free Account
                    </span>
                  </div>
                  <UserProfileIcon
                    className={`${
                      router.asPath === '/profile' ? 'text-current' : 'text-default-text'
                    } group-hover:text-current ml-5`}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col flex-grow page-content md:${
            isSidebarExpanded ? 'pl-sidebar' : 'pl-sidebar-collapsed'
          } lg:pl-sidebar mx-8`}
        >
          <div className="flex flex-col flex-grow w-full max-w-screen-xl mx-auto">{children}</div>
        </div>
      </StyledLayoutPage>
    </LayoutContext.Provider>
  );
}

var StyledLayoutPage = styled.div`
  .sidebar {
    transition: max-width 0.25s, transform 0.25s, -webkit-transform 0.25s;
  }
  .page-content {
    transition: all 0.25s;
  }
`;

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (context === undefined) {
    throw new Error('useLayoutContext must be used within LayoutContext.Provider');
  }
  return context;
};

var adminToolsLinks = [
  { href: '/', text: 'Overview', icon: OverviewIcon },
  { href: '/products', text: 'Products', icon: ProductsIcon },
  { href: '/campaigns', text: 'Campaigns', icon: CampaignsIcon },
  { href: '/schedules', text: 'Schedules', icon: SchedulesIcon },
  { href: '/payouts', text: 'Payouts', icon: PayoutsIcon },
  { href: '/statement', text: 'Statement', icon: StatementIcon },
  { href: '/settings', text: 'Settings', icon: SettingsIcon },
];
