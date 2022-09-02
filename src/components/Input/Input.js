import React from 'react';
import { View,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';

function Input(props) {
  //Here the input component is displayed on the screen.
  return (
    <View style={props.theme==='light' ? styles.lightContainer : styles.darkContainer}>
      <Icon name={props.iconName} size={20} color='#8C8C8C'/>
      <TextInput {...props} style={styles.input} />
    </View>
  );
}

export default Input;