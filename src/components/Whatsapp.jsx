import React from 'react'
import Messenger from "./chat/Messenger"
import Login from "./login/Header"

import { useContext } from "react";
import { UserContext } from './Authentication/Users'

const Whatsapp = () => {
  const { userAccount } = useContext(UserContext)
  console.log("userAccount", userAccount)
  return (
    <>
      {userAccount ? <Messenger />
        :
        <Login />
      }
    </>


  );
}

export default Whatsapp
