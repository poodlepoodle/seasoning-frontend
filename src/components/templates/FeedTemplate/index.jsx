import * as S from './style';
import { Link } from 'react-router-dom';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import TabBar from '@components/molecules/TabBar';
import FriendsFeedItem from '@components/molecules/FriendsFeedItem';

import { useFeedContext } from '@contexts/FeedContext';

export default function FeedTemplate() {
  const { feedData, observerRef } = useFeedContext();

  return (
    <S.Layout>
      <S.MenuContainer>
        <Text size="1.25" weight="600">
          친구들의 24절기
        </Text>
        <S.MenuBox>
          <Link to={`/feed/friends-search`}>
            <Icon width="1.5" height="1.5" type="search-menu" />
          </Link>
          <Link to={`/feed/friends-list`}>
            <Icon width="1.5" height="1.5" type="friends-list" />
          </Link>
        </S.MenuBox>
      </S.MenuContainer>

      <S.FeedList>
        {feedData.map(({ profile, article }) => (
          <FriendsFeedItem
            key={article.id}
            profile={profile}
            article={article}
          />
        ))}

        <div ref={observerRef} />
      </S.FeedList>

      <TabBar />
    </S.Layout>
  );
}
