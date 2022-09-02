import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Chat.style';
import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import Input from '../../components/Input';
import Message from '../../components/Message';
import moment from 'moment';

const Chat = ({route}) => {
  //Necessary context data and states are created.
  const {receiver,type} = route.params;
  const {currentUser,chatList,setChatList}=useUser();
  const {theme}=useTheme();
  const [message,setMessage]=useState('');
  const [list,setList]=useState([]);

  //Here, the messages belonging to the receiver that come as a parameter in the chatList on
  //the context are checked and thrown into the list state.
  useEffect(()=>{
    let messages={};
    chatList.forEach((value,index)=>{
      if(value.receiver.userName===receiver.userName){
        messages={...value};
      }
    });
    setList(messages.messageList);
  },[chatList]);

  //Here is the function where key assignments of the fields to repeat in the flatlist are made.
  const keyExtractor = (item, index) => {
    return String(index);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flatlist will appear on the screen. Also, a Message component is created for each message.
  const renderItem = ({item}) => {
    return <Message message={item} />;
  };

  //A new message or an additional message to the existing one is created and saved in the context,
  //depending on which page it came from.
  const sendMessage=()=>{
    if(type==='messages' || typeof list !== "undefined"){
      const newChatList=chatList.map((value,index)=>{
        if(value.receiver.userName!==receiver.userName){
          return value;
        }
        else{
          return {
            receiver: {firstName: receiver.firstName, lastName: receiver.lastName, userName: receiver.userName, image: receiver.image},
            sender: currentUser.userName,
            messageList: [
              ...list,
              {sender:'itself', datetime: moment().toISOString().split('.')[0], message:message},
            ],
          };
        }
      });
      setChatList([...newChatList]);
    }
    else{
      const newChat={
        receiver: {firstName: receiver.firstName, lastName: receiver.lastName, userName: receiver.userName, image: receiver.image},
        sender: currentUser.userName,
        messageList: [
          {sender:'itself', datetime: moment().toISOString().split('.')[0], message:message},
        ],
      };
      setChatList([...chatList,newChat]);
    }
  }

  //Here, messages are displayed on the screen with the textInput field and flatlist at the bottom.
  return (
    <SafeAreaView style={theme==='light' ? styles.lightContainer : styles.darkContainer}>
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
        overScrollMode="never"
        bounces={false}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.textInput}>
          <Input placeholder='Write a message' theme={theme} placeholderTextColor='#8C8C8C' value={message} onChangeText={setMessage}/>
        </View>
        <View style={styles.sendButton}>
          <Icon onPress={sendMessage} name="send" size={23} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
