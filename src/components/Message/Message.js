import moment from 'moment';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Message.style';

const Message = ({message}) => {
  //Here, the location is entered into the moment library to display the dates and times in different formats.
  moment.locale('tr');

  //Here, messages are created by checking the status of the sender via the incoming message prop.
  return (
    <View
      style={
        message.sender === 'itself'
          ? styles.sendContainer
          : styles.receiveContainer
      }>
      <View
        style={
          message.sender === 'itself' ? styles.rightCorner : styles.leftCorner
        }
      />
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>{message.message}</Text>
      </View>
      <View style={styles.timeWrapper}>
        <Text style={styles.time}>
          {moment(message.datetime).format('hh:mm')}
        </Text>
        {message.sender === 'itself' && (
          <Icon name="check" size={15} color="black" style={styles.icon} />
        )}
      </View>
    </View>
  );
};

export default Message;
