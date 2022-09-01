import React from 'react';
import { TouchableWithoutFeedback, View, Text, ActivityIndicator } from 'react-native';

import styles from "./Button.style";

function Button({title,onClick,loading}) {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        {loading ? <ActivityIndicator size={25} color="#4caf50" /> :
        <Text style={styles.title}>{title}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Button;