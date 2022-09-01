import moment from 'moment';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './Messages.style';

const Messages = () => {
  moment.locale('tr');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Messages Screen</Text>
    </SafeAreaView>
  );
};

export default Messages;