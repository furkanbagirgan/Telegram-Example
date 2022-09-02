import React from 'react';
import {SafeAreaView,FlatList,View} from 'react-native';

import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Messages.style';
import ChatCard from '../../components/ChatCard';

const Messages = ({navigation}) => {
  //Necessary context data and states are created.
  const {chatList}=useUser();
  const {theme}=useTheme();

  const keyExtractor = (item,index) => {
    return String(index);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flatlist will appear on the screen. Also, a chatCard component is created for each chat.
  const renderItem = ({item}) => {
    const name = item.receiver.firstName + ' ' + item.receiver.lastName;
    return (
      <ChatCard
        name={name}
        image={item.receiver.image}
        lastMessage={item.messageList[item.messageList.length - 1]}
        handlePress={() => goToChatDetail(item.receiver, name, 'messages')}
        theme={theme}
      />
    );
  };

  //Here is the function that allows switching to the chat screen when each chatCard component is clicked.
  const goToChatDetail = (receiver, chatName, type) => {
    navigation.navigate('Chat', {receiver, chatName, type});
  };

  //Here is the function that creates a line to appear between the areas to repeat in the flatlist.
  const ItemDivider = () => {
    return <View style={styles.divider} />;
  };

  //Here, the flatlist that will appear on the screen are created.
  return (
    <SafeAreaView style={theme==='light' ? styles.lightContainer : styles.darkContainer}>
      <FlatList
        keyExtractor={keyExtractor}
        data={chatList}
        renderItem={renderItem}
        overScrollMode="never"
        bounces={false}
        ItemSeparatorComponent={ItemDivider}
      />
    </SafeAreaView>
  );
};

export default Messages;