import styled from 'styled-components';
import ActiveUsersChart from '../components/charts/ActiveUsersChart';
import IncomeChart from '../components/charts/IncomeChart';
import NewUsersChart from '../components/charts/NewUsers';
import PageViewsChart from '../components/charts/PageViewsChart';
import Layout from '../components/layout';

function Home() {
  return (
    <Layout>
      <div className="flex flex-col-reverse lg:flex-row lg:divide-x divide-gray-border">
        <div className="px-4 lg:px-8 pb-8 lg:pb-10 pt-9 flex flex-col lg:w-2/3">
          <h2 className="text-lg font-medium">Hi Tam Tran,</h2>
          <h1 className="text-5xl font-semibold">Campaigns</h1>
        </div>
        <div className="px-4 lg:px-8 pb-8 lg:pb-10 pt-9 flex items-center justify-between lg:w-1/3">
          <span>Search</span>
          <StyledNotificationButton
            data-notification-count={2}
            className="notification-button shadow-md rounded-full bg-white flex items-center justify-center h-12 w-12"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 11V8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8V11C5 14.3 2 15.1 2 17C2 18.7 5.9 20 12 20C18.1 20 22 18.7 22 17C22 15.1 19 14.3 19 11Z"
                stroke="#11142D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C10.989 22 10.039 21.966 9.14502 21.9C9.53619 23.1478 10.6924 23.997 12 23.997C13.3077 23.997 14.4639 23.1478 14.855 21.9C13.961 21.966 13.011 22 12 22Z"
                fill="#1B1D21"
              />
            </svg>
          </StyledNotificationButton>
        </div>
      </div>
      <div className="flex flex-col flex-grow lg:flex-row lg:divide-x divide-gray-border">
        <div className="px-4 lg:px-8 pb-8 lg:pb-10 pt-9 flex flex-col lg:w-2/3">
          <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-lg font-medium mb-9">Active Users right now 💡</h2>
            <div className="flex space-x-4">
              <div className="w-1/3">
                <span className="font-semibold text-6xl mb-4">478</span>
                <div className="flex space-x-4 pb-4 md:border-b border-gray-border mb-4">
                  <img src="/images/dial.jpg" alt="Dial icon" className="w-8 h-8" />
                  <span className="font-medium text-xs text-link-text w-20">
                    Page views per minute
                  </span>
                </div>
                <div className="h-10">
                  <PageViewsChart />
                </div>
                <span className="mt-4 w-32 text-xs text-light-text inline-block">
                  Update your payout method in Settings
                </span>
              </div>
              <div className="w-2/3 bg-primary-accent rounded-xl p-6">
                <ActiveUsersChart />
              </div>
            </div>
            <div className="rounded-xl border border-gray-border flex divide-x divide-gray-border mt-8">
              <div className="p-6 space-y-4 w-full">
                <div className="flex space-x-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="6" fill="#6C5DD3" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.48329 5.62668H9.50663C10.7366 5.62668 11.3366 6.28335 11.3333 7.63002V9.25335C11.3333 10.54 10.54 11.3333 9.24996 11.3333H6.74663C5.46329 11.3333 4.66663 10.54 4.66663 9.25002V6.74668C4.66663 5.36668 5.27996 4.66668 6.48996 4.66668H7.01663C7.32696 4.66335 7.61663 4.80668 7.80663 5.05002L8.09996 5.44002C8.19329 5.55668 8.33329 5.62668 8.48329 5.62668ZM6.45663 9.09669H9.54329C9.67996 9.09669 9.78996 8.98336 9.78996 8.84669C9.78996 8.70669 9.67996 8.59669 9.54329 8.59669H6.45663C6.31663 8.59669 6.20663 8.70669 6.20663 8.84669C6.20663 8.98336 6.31663 9.09669 6.45663 9.09669Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-xs text-gray-text">Users</span>
                </div>
                <span className="text-4xl font-semibold inline-block">36k</span>
                <div className="border border-gray-border relative w-full">
                  <div className="border border-primary w-1/2 absolute left-0"></div>
                </div>
              </div>
              <div className="p-6 space-y-4 w-full">
                <div className="flex space-x-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="6" fill="#FFA2C0" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.72666 5.46996C9.72666 5.02663 10.0867 4.66663 10.53 4.66663C10.9733 4.66663 11.3333 5.02663 11.3333 5.46996C11.3333 5.91329 10.9733 6.27329 10.53 6.27329C10.0867 6.27329 9.72666 5.91329 9.72666 5.46996ZM8.44329 8.91972L9.40662 7.67672L9.39329 7.68339C9.44662 7.61005 9.45662 7.51672 9.41996 7.43339C9.38362 7.35005 9.30329 7.29339 9.21696 7.28672C9.12662 7.27672 9.03696 7.31672 8.98329 7.39005L8.17696 8.43339L7.25329 7.70672C7.19662 7.66339 7.12996 7.64639 7.06329 7.65339C6.99696 7.66339 6.93696 7.69972 6.89662 7.75305L5.91029 9.03672L5.88996 9.06672C5.83329 9.17305 5.85996 9.30972 5.95996 9.38339C6.00662 9.41339 6.05663 9.43339 6.11329 9.43339C6.19029 9.43672 6.26329 9.39639 6.30996 9.33339L7.14662 8.25639L8.09662 8.97005L8.12662 8.98972C8.23329 9.04639 8.36662 9.02005 8.44329 8.91972ZM9.14996 5.26006C9.13663 5.34339 9.12996 5.42672 9.12996 5.51006C9.12996 6.26006 9.73663 6.86639 10.4833 6.86639C10.5666 6.86639 10.6466 6.85672 10.73 6.84339V9.53306C10.73 10.6634 10.0633 11.3334 8.92996 11.3334H6.46696C5.33329 11.3334 4.66663 10.6634 4.66663 9.53306V7.06672C4.66663 5.93339 5.33329 5.26006 6.46696 5.26006H9.14996Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-xs text-gray-text">Clicks</span>
                </div>
                <span className="text-4xl font-semibold inline-block">1m</span>
                <div className="border border-gray-border relative w-full">
                  <div
                    className="border w-1/2 absolute left-0"
                    style={{ borderColor: '#FFA2C0' }}
                  ></div>
                </div>
              </div>
              <div className="p-6 space-y-4 w-full">
                <div className="flex space-x-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="6" fill="#3F8CFF" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.7144 7.50413L10.971 9.50079C11.1614 10.8041 10.4044 11.3341 9.38769 11.3341H6.62435C5.60469 11.3341 4.82435 10.9675 5.03435 9.50079L5.29435 7.50413C5.33435 7.20746 5.47769 6.93079 5.70102 6.72746C5.87135 6.57779 6.09102 6.49746 6.31769 6.49746V6.42079C6.29102 5.80413 6.60802 5.22079 7.14102 4.90413C7.67435 4.58746 8.34102 4.58746 8.87435 4.90413C9.40769 5.22079 9.72102 5.80413 9.69769 6.42079V6.49746C10.1177 6.49746 10.561 6.79079 10.7144 7.50413ZM6.82435 6.4208C6.82435 5.77413 7.35102 5.24746 8.00102 5.24746C8.65435 5.24746 9.18102 5.77413 9.18102 6.4208V6.49446H6.82435V6.4208ZM6.73435 7.86413C6.73435 8.02413 6.86768 8.15746 7.03101 8.15746C7.19435 8.15746 7.32435 8.02413 7.32435 7.86413C7.32435 7.7008 7.19435 7.5708 7.03101 7.5708C6.86768 7.5708 6.73435 7.7008 6.73435 7.86413ZM8.96435 8.15746C9.04102 8.15746 9.11769 8.12746 9.17102 8.0708C9.22769 8.01746 9.25769 7.9408 9.25769 7.86413C9.25769 7.7008 9.12435 7.5708 8.96435 7.5708C8.80135 7.5708 8.66769 7.7008 8.66769 7.86413C8.66769 8.02413 8.80135 8.15746 8.96435 8.15746Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-xs text-gray-text">Sales</span>
                </div>
                <span className="text-4xl font-semibold inline-block">327$</span>
                <div className="border border-gray-border relative w-full">
                  <div className="border border-primary-accent w-1/2 absolute left-0"></div>
                </div>
              </div>
              <div className="p-6 space-y-4 w-full">
                <div className="flex space-x-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="6" fill="#FF9A7B" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.0002 4.66663C8.8832 4.66663 9.7332 5.01663 10.3565 5.64329C10.9832 6.27029 11.3335 7.11663 11.3335 8.00329C11.3335 9.16996 10.7199 10.2533 9.71987 10.8566C8.71987 11.46 7.47654 11.4933 6.44354 10.9433H6.4332C6.37615 10.9204 6.32543 10.8877 6.27498 10.8551C6.2373 10.8308 6.19977 10.8066 6.15987 10.7866C6.05687 10.7433 5.93987 10.7366 5.83354 10.7703C5.58654 10.8566 5.33654 10.9266 5.07987 10.9866C4.94654 10.99 4.90654 10.91 4.90654 10.78C4.96654 10.5166 5.04654 10.2563 5.1402 10.0033C5.17654 9.89329 5.16687 9.77663 5.1102 9.67296L5.04354 9.54329C4.79654 9.07329 4.66687 8.54996 4.66687 8.02029V7.99996C4.66687 7.11663 5.01654 6.26663 5.6432 5.64329C6.26987 5.01663 7.11654 4.66663 8.0002 4.66663ZM6.4632 8.42995C6.22653 8.42995 6.03653 8.23662 6.03653 8.00328C6.03653 7.76662 6.22653 7.57662 6.4632 7.57662C6.69653 7.57662 6.8902 7.76662 6.8902 8.00328C6.8902 8.23662 6.69653 8.42995 6.4632 8.42995ZM7.57321 8.00328C7.57321 8.23662 7.76354 8.42995 8.00021 8.42995C8.23687 8.42995 8.42654 8.23662 8.42654 8.00328C8.42654 7.76662 8.23687 7.57662 8.00021 7.57662C7.76354 7.57662 7.57321 7.76662 7.57321 8.00328ZM9.11019 8.00328C9.11019 8.23662 9.30319 8.42995 9.53653 8.42995C9.77319 8.42995 9.96319 8.23662 9.96319 8.00328C9.96319 7.76662 9.77319 7.57662 9.53653 7.57662C9.30319 7.57662 9.11019 7.76662 9.11019 8.00328Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-xs text-gray-text">Items</span>
                </div>
                <span className="text-4xl font-semibold inline-block">68</span>
                <div className="border border-gray-border relative w-full">
                  <div
                    className="border w-1/2 absolute left-0"
                    style={{ borderColor: '#FF9A7B' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8">
            <div className="bg-white shadow-lg rounded-lg pb-6 w-full flex-grow">
              <h2 className="font-medium text-lg p-6 pb-0">Users</h2>
              <div className="p-6 flex justify-between space-x-6 border-b border-gray-border">
                <div className="flex flex-col">
                  <span className="text-light-text text-xs">New Users</span>
                  <span className="font-semibold text-3xl">57m</span>
                  <span className="text-success text-sm font-semibold">21.77%</span>
                </div>
                <div className="w-48 h-24">
                  <NewUsersChart />
                </div>
              </div>
              <div className="p-6 flex justify-between space-x-6 border-b border-gray-border">
                <div className="flex flex-col">
                  <span className="text-light-text text-xs">New Users</span>
                  <span className="font-semibold text-3xl">57m</span>
                  <span className="text-success text-sm font-semibold">21.77%</span>
                </div>
                <div className="w-48 h-24">
                  <NewUsersChart />
                </div>
              </div>
            </div>
            <div className="bg-primary shadow-lg rounded-lg w-full flex-grow">
              <h2 className="p-8 text-white text-lg font-medium">Income</h2>
              <div className="mx-2 mb-2 bg-white rounded-lg p-6 pt-12">
                <div className="w-full">
                  <IncomeChart />
                </div>
                <button className="bg-black text-white hover:bg-primary rounded-xl h-14 flex justify-center items-center w-full px-8 mt-4">
                  Withdraw Earning
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-8 pb-8 lg:pb-10 pt-9 flex flex-col lg:w-1/3">Test</div>
      </div>
    </Layout>
  );
}

const StyledNotificationButton = styled.button`
  position: relative;

  &::after {
    content: '2';
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    color: white;
    background-color: #ff754c;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export default Home;
