import moment from 'moment';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './Contacts.style';

const Contacts = () => {
  moment.locale('tr');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Contacts Screen</Text>
    </SafeAreaView>
  );
};

export default Contacts;