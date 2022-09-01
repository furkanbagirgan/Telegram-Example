import React from 'react';
import {SafeAreaView,FlatList} from 'react-native';
import { useUser } from '../../contexts/UserContext';

import styles from './Contacts.style';
import ChatCard from '../../components/ChatCard';

const Contacts = ({navigation}) => {
  const {contactList}=useUser();

  const keyExtractor = item => {
    return String(item.id);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flatlist will appear on the screen. Also, a chatCard component is created for each chat.
  const renderItem = ({item}) => {
    const name = item.firstName + ' ' + item.lastName;
    return (
      <ChatCard
        name={name}
        image={item.image}
        userName={item.userName}
        handlePress={() => goToChatDetail(item.userName, name)}
      />
    );
  };

  //Here is the function that allows switching to the chat screen when each chatCard component is clicked.
  const goToChatDetail = (receiver, chatName) => {
    navigation.navigate('Chat', {receiver, chatName});
  };

  //Here is the function that creates a line to appear between the areas to repeat in the flatlist.
  const ItemDivider = () => {
    return <View style={styles.divider} />;
  };

  //Here, the tabBar component and flatlist that will appear on the screen are created.
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={contactList}
        renderItem={renderItem}
        overScrollMode="never"
        bounces={false}
        ItemSeparatorComponent={ItemDivider}
      />
    </SafeAreaView>
  );
};

export default Contacts;