import {useContext, createContext, useState} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [chatList, setChatList] = useState([
    {
      receiver: 'mehmet08',
      sender: 'furkanbrgn',
      messageList: [
        {sender: 'furkanbrgn', time: '11:35', message: 'Naber :)'},
        {sender:'mehmet08',time:'11:36',message:'İyidir'},
      ],
    },
  ]);
  const contactList = [
    {id: '1', firstName: 'Mehmet', lastName: 'Kaya', userName: 'mehmet08'},
    {id: '2', firstName: 'Deniz', lastName: 'Bulut', userName: '_denizbul'},
    {id: '3', firstName: 'Ömer', lastName: 'Sayan', userName: 'omer04say'},
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
