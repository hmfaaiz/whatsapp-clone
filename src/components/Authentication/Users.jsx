import React, { createContext, useState, useEffect, useRef } from 'react';


export const UserContext = createContext(null);


const Users = ({ children }) => {
  const [userAccount, setUserAccount] = useState();

  return (
    <UserContext.Provider value={{
      userAccount,
      setUserAccount
    }}>
      {children}

    </UserContext.Provider>
  )
}

export default Users
