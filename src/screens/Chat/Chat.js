import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Chat.style';
import { useUser } from '../../contexts/UserContext';
import Input from '../../components/Input';
import Message from '../../components/Message';

const Chat = ({route}) => {
  //Here, the parameters from the home screen are taken by route and assigned to the objects.
  const {receiver,type} = route.params;
  const {currentUser,chatList}=useUser();
  const [message,setMessage]=useState('');
  const [list,setList]=useState([]);

  useEffect(()=>{
    let messages={};
    chatList.forEach((value,index)=>{
      if(value.receiver.userName===receiver.userName){
        messages={...value};
      }
    })
    setList(messages.messageList);
  },[chatList]);

  //Here is the function where key assignments of the fields to repeat in the flatlist are made.
  const keyExtractor = (item, index) => {
    return String(index);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flatlist will appear on the screen. Also, a MessageCard component is created for each message.
  const renderItem = ({item}) => {
    return <Message message={item} />;
  };

  //Here, messages are displayed on the screen with the textInput field and flatlist at the bottom.
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
        overScrollMode="never"
        bounces={false}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.textInput}>
          <Input placeholder='Write a message' placeholderTextColor='#8C8C8C' value={message} onChangeText={setMessage}/>
        </View>
        <View style={styles.sendButton}>
          <Icon name="send" size={23} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
