import moment from 'moment';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './Chat.style';

const Chat = () => {
  moment.locale('tr');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Chat Screen</Text>
    </SafeAreaView>
  );
};

export default Chat;