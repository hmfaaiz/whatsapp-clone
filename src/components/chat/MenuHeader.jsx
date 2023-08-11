
import React, { useState, useContext } from 'react';
import { UserContext } from '../Authentication/Users';
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material"
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import GroupsIcon from '@mui/icons-material/Groups';

const Component = styled(Box)`
    height: 36px;
    background: #ededed;
    display: flex;
    padding: 8px 14px;
    align-items: center;
`;

const Icons = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 8px;
        padding: 8px;
        color: #54656f;
        font-size: 20px;
        margin-top:8px;
    };

    
`;
const ImgTag = styled('img')({
  height: 36,
  width: 36,
  borderRadius: '50%'
})

const MenuHeader = () => {

  const { userAccount } = useContext(UserContext)

  return (
    <>
      <Component>
        <ImgTag src={userAccount.picture} alt='pic'></ImgTag>
        <Icons>
          <GroupsIcon />
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />

        </Icons>

      </Component>
    </>
  )
}

export default MenuHeader
