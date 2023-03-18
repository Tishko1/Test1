import styled from '@emotion/styled';

import picture from 'images/picture.svg';
import logo from 'images/logo.svg';


export const Container = styled.div`

background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;

  width: 380px;
  height: 460px;
  margin: 15px auto;
  padding-top: 28px;
  
  position: relative;
  
  // padding: 15px;
  // display: flex;
  // flex-direction: column;
  // gap: 30px;
  // text-align: center;
  // border: 5px solid #77529e;
  // &::before{
  //   display: block;
  //   content: url(${logo});
  //   // left: 20px;
  //   top: 50px;
  //   right: 60px;
  // }
`;

export const LogoImg = styled.img`
  width: 76px;
  height: 22px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BlockFirst = styled.div`



background-image: url(${picture});
    background-repeat: no-repeat;

    width: 308px;
    height: 168px;
    margin: 5px 36px 18px 36px;
  
  // display: flex;
  // flex-direction: column;
  // gap: 30px;
  // text-align: center;
  // border: 5px solid #77529e;
  // border-radius: 20px;
  
`;

export const Block = styled.div`

// background-image: url(${logo});
//   background-repeat: no-repeat;

width: 380px;
height: 8px;
background-color:#EBD8FF;


`;

export const AvatarImg = styled.img`
  width: 62px;
  height: 62px;
  // border-radius: 50%;
  position:absolute;
  left: 168px;
  top: 197px;
`;

export const TweetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Btn = styled.button`
margin: 28px auto 0;
  padding: 14px;
  width: 196px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5cd3a8' : '#ebd8ff'};
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  outline: none;
  transition: transform 200ms ease-in-out;
  // &:hover,
  // &:focus,
  // &:active {
  //   transform: translateY(-3px);
  // }
`;

export const BlockSecond = styled.div`
padding-top: 62px;

// width: 308px;
//     height: 168px;
//   font-size: 14px;
  
//   // margin: 15px auto;
  
//   display: flex;
//   flex-direction: column;
//   gap: 30px;
//   text-align: center;
//   border: 5px solid #77529e;
//   border-radius: 20px;
`;

// export const Button = styled.button`
//   display: block;
//   margin: 28px auto 0;
//   width: 110px;
//   height: 40px;
//   padding: 0px 10px;
//   text-align: center;
//   text-transform: uppercase;
//   cursor: pointer;
//   border-radius: 5px;
//   border: 3px solid #cca8e9;
//   &:hover {
//     background-color: #c3bef0;
//   }
// `;
