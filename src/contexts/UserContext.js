import React, {useContext, createContext, useState} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [chatList, setChatList] = useState([
    {
      receiver: 'mehmet08',
      sender: 'furkanbrgn',
      image: 'https://picsum.photos/id/1005/60',
      messageList: [
        {sender: 'furkanbrgn', datetime: '2022-09-01T11:35:00', message: 'Naber :)'},
        {sender:'mehmet08',datetime:'2022-09-01T11:36:00',message:'İyidir'},
      ],
    },
  ]);
  const contactList = [
    {id: '1', firstName: 'Mehmet', lastName: 'Kaya', userName: 'mehmet08', image: 'https://picsum.photos/id/1005/60'},
    {id: '2', firstName: 'Deniz', lastName: 'Bulut', userName: '_denizbul', image: 'https://picsum.photos/id/101/60'},
    {id: '3', firstName: 'Ömer', lastName: 'Sayan', userName: 'omer04say', image: 'https://picsum.photos/id/1006/60'},
  ];

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        chatList,
        setChatList,
        contactList,
      }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  return useContext(UserContext);
}

export {useUser, UserProvider};
