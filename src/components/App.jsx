import { useState, useEffect } from 'react';

import boy from 'images/boy.svg';
import logo from 'images/logo.svg';
import {
  Block,
  BlockFirst,
  BlockSecond,
  Container,
  LogoImg,
  AvatarImg,
  TweetInfo,
  Btn,
} from './App.styled';

export function App() {
  const [isFollowing, setIsFollowing] = useState(
    () => JSON.parse(localStorage.getItem('isFollowing')) ?? false
  );
    const [followers, setFollowers] = useState(
    () => JSON.parse(localStorage.getItem('followers')) ?? '100500'
  );

  const tweets= 777;

  useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(followers));
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
  }, [followers, isFollowing]);

  const handleBtnClick = event => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers(prevState => +prevState - 1);
    } else {
      setIsFollowing(true);
      setFollowers(prevState => +prevState + 1);
    }
  };

  const addPoint = foll => {
    let follStr = String(foll);
    let a = follStr.slice(0, 3);
    let b = follStr.slice(3, 6);
    return a + ',' + b;
  };

  let followersVisual = addPoint(followers);

  return (
    <Container>
      <LogoImg src={logo} alt="logo image" />
      <BlockFirst> </BlockFirst>
      <Block>
        <AvatarImg src={boy} alt="avatar image" />
      </Block>
      <BlockSecond>
        <TweetInfo>
          <p>{tweets} tweets</p>
          <p>{followersVisual} followers</p>
        </TweetInfo>
        <Btn onClick={handleBtnClick} isFollowing={isFollowing}>
          {isFollowing ? 'Following' : 'Follow'}
        </Btn>
      </BlockSecond>
    </Container>
  );
}
