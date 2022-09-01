import moment from 'moment';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './Theme.style';

const Theme = () => {
  moment.locale('tr');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Theme Screen</Text>
    </SafeAreaView>
  );
};

export default Theme;