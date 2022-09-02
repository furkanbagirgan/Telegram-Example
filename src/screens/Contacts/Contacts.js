import React from 'react';
import {SafeAreaView,FlatList,View} from 'react-native';

import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Contacts.style';
import ContactCard from '../../components/ContactCard';

const Contacts = ({navigation}) => {
  //Necessary context data and states are created.
  const {contactList}=useUser();
  const {theme}=useTheme();

  const keyExtractor = item => {
    return String(item.id);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flatlist will appear on the screen. Also, a contactCard component is created for each chat.
  const renderItem = ({item}) => {
    const name = item.firstName + ' ' + item.lastName;
    return (
      <ContactCard
        name={name}
        image={item.image}
        userName={item.userName}
        handlePress={() => goToChatDetail(item, name, 'contacts')}
        theme={theme}
      />
    );
  };

  //Here is the function that allows switching to the chat screen when each contactCard component is clicked.
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