import moment from 'moment';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import styles from './Settings.style';

const Settings = () => {
  moment.locale('tr');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings Screen</Text>
    </SafeAreaView>
  );
};

export default Settings;