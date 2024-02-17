import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;

  display: flex;
  justify-content: space-between;

  background-color: #fff;
`;

const LogoBox = styled.div`
  height: 100%;
  margin: 0 1rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const NavBox = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 0.88rem;
  margin: 0 1rem;
`;

const TopBar = ({ isNewNotification }) => {
  return (
    <Layout>
      <LogoBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M23 21.2088C23 24.4107 19.9715 27 16.2266 27H7C7.48847 26.2204 16.6825 11.3712 17.7028 9.71926C17.3121 9.53364 16.8996 9.37587 16.4437 9.24594C13.654 8.43852 10.8643 9.04176 10.2347 10.7401C9.8114 11.891 10.517 13.413 12.0692 14.4524C9.84396 13.4223 8.88874 11.9838 8.88874 9.3109C8.88874 5.82135 12.1995 3 16.27 3C18.0611 3 20.0041 3.54756 21.5129 4.87471C20.8725 5.89559 11.483 21.0696 10.9837 21.8863H16.2809C18.365 21.8863 20.0692 20.4385 20.0692 18.6473C20.0692 17.2274 19.483 16.3643 17.616 15.5476C20.8399 16.123 22.9891 18.4339 22.9891 21.1995L23 21.2088Z"
            fill="black"
            stroke="black"
            strokeWidth="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="92"
          height="17"
          viewBox="0 0 92 17"
          fill="none"
        >
          <svg clipPath="url(#clip0_669_2902)">
            <path
              d="M4.46912 13.2625C2.8198 13.2625 1.64932 12.5192 1.12792 12.275C0.883183 12.4767 0.649086 12.7634 0.510756 13.1563H0V8.73907H0.595882C0.776775 9.90709 1.80893 12.1369 4.32015 12.1369C5.70345 12.1369 6.54407 11.3724 6.54407 10.2469C6.54407 9.32308 5.46935 8.77093 4.2563 8.11259L2.25584 7.0189C1.03215 6.3287 0.159611 5.20316 0.159611 3.55731C0.159611 1.78404 1.64932 0.223145 3.83067 0.223145C5.00116 0.223145 5.83114 0.616024 6.4483 1.062C6.69304 0.860246 6.92713 0.584169 7.06546 0.223145H7.5443V4.17318H6.9697C6.61855 2.59104 5.71409 1.33807 3.93708 1.33807C2.94749 1.33807 2.20264 1.9327 2.20264 2.8565C2.20264 3.86524 3.08582 4.3006 4.36271 4.96955L6.07587 5.87211C7.86352 6.81715 8.54453 8.02764 8.54453 9.32308C8.54453 11.5848 6.83137 13.2519 4.46912 13.2519V13.2625Z"
              fill="black"
            />
            <path
              d="M14.6738 13.1563C11.971 13.1563 10.1621 11.0963 10.1621 8.40987C10.1621 5.72343 12.3647 3.73779 14.6738 3.73779C17.1424 3.73779 18.547 5.42611 18.547 7.12505C18.547 7.51793 18.4832 7.78339 18.4193 8.02761H12.7372V8.53729C12.7797 10.5335 13.3331 11.967 15.4931 11.967C16.6104 11.967 17.5787 11.4573 18.2704 10.8202L18.8024 11.5635C17.9618 12.3811 16.5572 13.1457 14.6632 13.1457L14.6738 13.1563ZM14.7589 4.76777C13.8545 4.76777 13.1096 5.46859 12.8436 7.07196H16.238C16.2593 6.94454 16.2805 6.72155 16.2805 6.5198C16.2805 5.37302 15.6634 4.76777 14.7589 4.76777Z"
              fill="black"
            />
            <path
              d="M27.4637 13.0816C26.2294 13.0816 25.7506 12.3595 25.6123 11.6375C24.5375 12.6038 23.6331 13.0922 22.5796 13.0922C21.1219 13.0922 20.228 12.1896 20.228 10.9367C20.228 8.91919 22.5584 7.88921 25.5484 7.40076V6.76366C25.5484 5.28771 25.2611 4.62937 24.1651 4.62937C23.4203 4.62937 22.6967 5.02225 22.6967 5.83986C22.6967 6.39202 22.2817 6.80614 21.7709 6.80614C21.2176 6.80614 20.8239 6.39202 20.8239 5.83986C20.8239 4.56566 22.6328 3.74805 24.3886 3.74805C26.9423 3.74805 27.9745 4.87359 27.9745 6.95479V11.234C27.9745 11.8499 28.1448 12.1153 28.4533 12.1153C28.6981 12.1153 28.9109 11.9667 29.0705 11.8286L29.3791 12.3383C28.8683 12.8267 28.2086 13.0816 27.4637 13.0816ZM25.5484 8.18652C23.4309 8.66435 22.5158 9.68371 22.5158 10.6712C22.5158 11.3508 22.9308 11.7755 23.5905 11.7755C24.0268 11.7755 24.7397 11.5738 25.5484 10.788V8.1759V8.18652Z"
              fill="black"
            />
            <path
              d="M34.0826 13.156C32.8483 13.156 31.8374 12.6464 31.3053 12.1898C31.1032 12.4765 31.018 12.7632 30.9542 13.0499H30.4009V9.67321H30.9755C31.1989 10.8412 32.4971 12.1154 34.1039 12.1154C35.0296 12.1154 35.4233 11.6058 35.4233 11.0005C35.4233 10.4484 34.87 10.0555 33.923 9.64136L32.8908 9.18477C31.1777 8.50519 30.5179 7.58139 30.5179 6.30719C30.5179 4.88433 31.7523 3.71631 33.4229 3.71631C34.6785 3.71631 35.4446 4.1729 35.8383 4.48083C35.966 4.32156 36.1043 4.06671 36.1256 3.82249H36.6364V6.49832H36.083C35.8383 5.40463 34.8274 4.71443 33.6676 4.71443C32.7418 4.71443 32.412 5.22412 32.412 5.70194C32.412 6.21162 32.8695 6.56203 33.9975 7.01862L34.8594 7.39026C36.5725 8.0486 37.2855 9.12106 37.2855 10.1829C37.2855 11.9668 36.0724 13.1454 34.0719 13.1454L34.0826 13.156Z"
              fill="black"
            />
            <path
              d="M43.5421 13.2413C40.6797 13.2413 38.5303 11.107 38.5303 8.45246C38.5303 5.79787 40.6691 3.66357 43.5421 3.66357C46.4151 3.66357 48.5752 5.79787 48.5752 8.45246C48.5752 11.107 46.3938 13.2413 43.5421 13.2413ZM43.5421 4.67232C41.914 4.67232 41.1479 6.07394 41.1479 8.45246C41.1479 10.831 41.914 12.2326 43.5421 12.2326C45.1701 12.2326 45.9575 10.8522 45.9575 8.45246C45.9575 6.05271 45.1488 4.67232 43.5421 4.67232Z"
              fill="black"
            />
            <path
              d="M56.3533 12.9118V12.3384C57.5025 12.3384 57.8004 11.988 57.8004 9.92805V7.49645C57.8004 5.8506 57.2471 5.05422 56.0128 5.05422C54.7785 5.05422 53.6612 6.20101 53.6612 7.75129V9.92805C53.6612 11.988 53.9485 12.3384 55.1083 12.3384V12.9118H49.6709V12.3384C50.9265 12.3384 51.2351 11.988 51.2351 9.92805V7.1779C51.2351 5.11793 50.9904 4.76753 49.6922 4.76753V4.19414L53.2568 3.71631C53.3845 3.98177 53.6718 4.94804 53.6718 5.52143C54.2464 4.64011 55.4275 3.73755 56.9705 3.73755C59.088 3.73755 60.2478 5.18164 60.2478 7.27346V9.92805C60.2478 11.988 60.5351 12.3384 61.812 12.3384V12.9118H56.3746H56.3533Z"
              fill="black"
            />
            <path
              d="M62.4507 12.9119V12.3385C63.7063 12.3385 64.0149 11.9881 64.0149 9.92817V7.17801C64.0149 5.11805 63.7489 4.76764 62.4507 4.76764V4.19425L66.4516 3.71643V9.92817C66.4516 11.9881 66.7389 12.3385 68.0158 12.3385V12.9119H62.4507ZM65.1747 0C65.9196 0 66.5155 0.573392 66.5155 1.31668C66.5155 2.05996 65.9196 2.63335 65.1747 2.63335C64.4299 2.63335 63.8553 2.05996 63.8553 1.31668C63.8553 0.573392 64.4299 0 65.1747 0Z"
              fill="black"
            />
            <path
              d="M75.5598 12.9118V12.3384C76.709 12.3384 77.007 11.988 77.007 9.92805V7.49645C77.007 5.8506 76.4537 5.05422 75.2193 5.05422C73.985 5.05422 72.8677 6.20101 72.8677 7.75129V9.92805C72.8677 11.988 73.155 12.3384 74.3149 12.3384V12.9118H68.8774V12.3384C70.1331 12.3384 70.4416 11.988 70.4416 9.92805V7.1779C70.4416 5.11793 70.1969 4.76753 68.8987 4.76753V4.19414L72.4634 3.71631C72.5911 3.98177 72.8784 4.94804 72.8784 5.52143C73.453 4.64011 74.6341 3.73755 76.177 3.73755C78.2945 3.73755 79.4544 5.18164 79.4544 7.27346V9.92805C79.4544 11.988 79.7417 12.3384 81.0185 12.3384V12.9118H75.5811H75.5598Z"
              fill="black"
            />
            <path
              d="M91.1591 5.90357C90.7654 5.90357 90.5633 5.70183 90.4143 5.37266C90.3079 5.08596 90.2121 4.84174 89.861 4.84174C89.6801 4.84174 89.4247 4.97978 89.2225 5.19214C89.6375 5.64873 89.7971 6.24336 89.7971 6.77428C89.7971 8.37765 88.4138 9.58815 86.3176 9.77928C83.8064 10.0235 83.4978 10.1722 83.4978 10.5438C83.4978 10.8305 83.7851 11.0216 85.6579 11.0322C89.2013 11.096 90.4356 12.2215 90.4356 13.8886C90.4356 15.6406 88.6054 17.0104 85.7324 17.0104C82.8594 17.0104 81.4229 16.0229 81.4229 14.8761C81.4229 14.154 82.1039 13.5807 82.8487 13.4532L83.402 13.7187C82.9658 13.8992 82.721 14.2284 82.721 14.6637C82.721 15.4282 84.0192 16.0229 85.7324 16.0229C87.7541 16.0229 88.8075 15.2796 88.8075 14.5044C88.8075 13.7293 88.1478 13.3152 85.4663 13.2515C82.7849 13.209 81.8804 12.3489 81.8804 11.3189C81.8804 10.3951 82.721 9.7368 83.9447 9.47135C82.7955 9.01476 81.8804 8.06972 81.8804 6.77428C81.8804 4.9904 83.6149 3.74805 85.8601 3.74805C86.8922 3.74805 87.9988 4.05598 88.6798 4.62937C89.2119 4.09845 89.9567 3.76928 90.5101 3.76928C91.4571 3.76928 91.9891 4.32144 91.9891 4.97978C91.9891 5.46822 91.6806 5.90357 91.1485 5.90357H91.1591ZM85.8601 4.65061C84.9343 4.65061 84.3597 5.41513 84.3597 6.76366C84.3597 8.11219 84.9343 8.88733 85.8601 8.88733C86.7858 8.88733 87.3391 8.06972 87.3391 6.76366C87.3391 5.4576 86.7858 4.65061 85.8601 4.65061Z"
              fill="black"
            />
          </svg>
          <defs>
            <clipPth id="clipP669_2902">
              <rect width="92" height="17" fill="white" />
            </clipPth>
          </defs>
        </svg>
      </LogoBox>

      <NavBox>
        <Link to={`/notification`}>
          {isNewNotification ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 18.8846V17.3846H6.3077V9.92305C6.3077 8.57818 6.72276 7.38908 7.55287 6.35575C8.38301 5.32242 9.44872 4.66153 10.75 4.37308V3.75C10.75 3.40278 10.8714 3.10765 11.1143 2.8646C11.3571 2.62153 11.6519 2.5 11.9988 2.5C12.3457 2.5 12.641 2.62153 12.8846 2.8646C13.1282 3.10765 13.25 3.40278 13.25 3.75V4.37308C14.5512 4.66153 15.6169 5.32242 16.4471 6.35575C17.2772 7.38908 17.6922 8.57818 17.6922 9.92305V17.3846H19.5V18.8846H4.5ZM11.9983 21.6923C11.5007 21.6923 11.0753 21.5153 10.7221 21.1613C10.3689 20.8073 10.1923 20.3817 10.1923 19.8846H13.8077C13.8077 20.3833 13.6305 20.8093 13.2761 21.1625C12.9218 21.5157 12.4959 21.6923 11.9983 21.6923ZM7.80765 17.3846H16.1923V9.92305C16.1923 8.76535 15.783 7.77721 14.9644 6.95863C14.1458 6.14003 13.1577 5.73073 12 5.73073C10.8423 5.73073 9.85413 6.14003 9.03555 6.95863C8.21695 7.77721 7.80765 8.76535 7.80765 9.92305V17.3846Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.7221 19.1613C7.0753 19.5153 7.50069 19.6923 7.99828 19.6923C8.49586 19.6923 8.92182 19.5157 9.27615 19.1625C9.63048 18.8093 9.80765 18.3833 9.80765 17.8846H6.1923C6.1923 18.3817 6.3689 18.8073 6.7221 19.1613ZM0.5 15.3846V16.8846H15.5V15.3846H13.6922V9.38463C13.432 9.39103 13.1743 9.37115 12.9192 9.325C12.6641 9.27885 12.4218 9.21475 12.1923 9.1327V15.3846H3.80765V7.92305C3.80765 6.76535 4.21695 5.77721 5.03555 4.95863C5.85413 4.14003 6.84227 3.73073 7.99997 3.73073C8.12512 3.73073 8.24175 3.73842 8.34985 3.7538C8.45793 3.76918 8.56887 3.78713 8.68265 3.80765C8.70445 3.47817 8.76342 3.16023 8.85957 2.85383C8.95572 2.54741 9.08585 2.24613 9.24995 1.94998V1.75C9.24995 1.40278 9.12816 1.10765 8.88457 0.864601C8.64099 0.621534 8.34575 0.5 7.99885 0.5C7.65195 0.5 7.35708 0.621534 7.11425 0.864601C6.87142 1.10765 6.75 1.40278 6.75 1.75V2.37308C5.44872 2.66153 4.38301 3.32242 3.55287 4.35575C2.72276 5.38908 2.3077 6.57818 2.3077 7.92305V15.3846H0.5Z"
                fill="#1C1B1F"
              />
              <path
                d="M13.4818 7.20193C12.7183 7.20193 12.0688 6.93468 11.5336 6.40018C10.9983 5.86568 10.7307 5.21663 10.7307 4.45305C10.7307 3.68948 10.998 3.04008 11.5325 2.50483C12.067 1.96958 12.716 1.70195 13.4796 1.70195C14.2431 1.70195 14.8925 1.9692 15.4278 2.5037C15.9631 3.0382 16.2307 3.68723 16.2307 4.4508C16.2307 5.21437 15.9634 5.86378 15.4289 6.39903C14.8944 6.93429 14.2454 7.20193 13.4818 7.20193Z"
                fill="#004A22"
              />
            </svg>
          )}
        </Link>
      </NavBox>
    </Layout>
  );
};

export default TopBar;
