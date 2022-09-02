import React, {useContext, createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

const UserProvider = ({children}) => {
  //The data to be kept in the user context is here.
  const [currentUser, setCurrentUser] = useState({});
  const [chatList, setChatList] = useState([]);
  const contactList = [
    {id: '1', firstName: 'Mehmet', lastName: 'Kaya', userName: 'mehmet08', image: 'https://picsum.photos/id/1005/60'},
    {id: '2', firstName: 'Deniz', lastName: 'Bulut', userName: '_denizbul', image: 'https://picsum.photos/id/101/60'},
    {id: '3', firstName: 'Ömer', lastName: 'Sayan', userName: 'omer04say', image: 'https://picsum.photos/id/1006/60'},
    {id: '4', firstName: 'Sena', lastName: 'Demir', userName: 'lemina45', image: 'https://picsum.photos/id/1009/60'},
  ];

  //With this function, it is checked whether a user has logged in before by connecting to the storage.
  const getUserValue = async () => {
    try {
      const value = await AsyncStorage.getItem('@userValue');
      if(value !== null) {
        const userValue=JSON.parse(value);
        setCurrentUser({
          ...userValue
        })
      }
    } catch(e) {
      console.log('Storage Read Error')
    }
  }

  //The getUserValue function is made to run when the application first starts.
  useEffect(()=>{
    getUserValue();
  },[]);

  //The data kept in the context with the Provider is opened to the outside.
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

//By creating the useUser hook, easy access to the data in the context is provided.
function useUser() {
  return useContext(UserContext);
}

export {useUser, UserProvider};
