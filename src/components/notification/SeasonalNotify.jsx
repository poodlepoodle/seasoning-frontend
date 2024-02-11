import styled from 'styled-components';

import { TermsToKorean } from '@utils/seasoning/TermsToKorean';

const Layout = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  column-gap: 1rem;

  background-color: white;
`;

const ProfileImage = styled.div`
  width: 2.9375rem;
  height: 2.9375rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;

  flex-shrink: 0;
`;

const Content = styled.div`
  flex-grow: 1;

  .notification__name {
    margin-right: 0.25rem;

    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .notification__content {
    color: #333;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .notification__time {
    color: #bfbfbf;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SeasonalNotify = ({ term, time }) => {
  return (
    <Layout>
      <ProfileImage>
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
            stroke-width="0.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ProfileImage>

      <Content>
        <span className="notification__name">{TermsToKorean[term]}</span>
        <span className="notification__content">노트가 열렸습니다</span>
        <br />
        <span className="notification__time">{time}</span>
      </Content>
    </Layout>
  );
};

export default SeasonalNotify;
