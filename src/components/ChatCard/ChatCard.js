import moment from 'moment';
import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';

import styles from './ChatCard.style';

const ChatCard = ({name, image, lastMessage, handlePress, theme}) => {
  //Here, the location is entered into the moment library to display the dates and times in different formats.
  moment.locale('tr');

  //Here, the incoming name is displayed on the screen together
  //with the image of that name and the date of the last message.
  return (
    <TouchableHighlight onPress={handlePress} underlayColor="#eee">
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.chatWrapper}>
          <View style={styles.receiverWrapper}>
            <Text style={theme==='light' ? styles.lightReceiver : styles.darkReceiver}>{name}</Text>
            <Text style={theme==='light' ? styles.lightDate : styles.darkDate}>
              {moment().day() === moment(lastMessage.datetime).day()
                ? moment(lastMessage.datetime).format('hh:mm')
                : moment(lastMessage.datetime).format('DD/MM/YYYY')}
            </Text>
          </View>
          <Text style={theme==='light' ? styles.lightMessage : styles.darkMessage}>
            {lastMessage.sender === 'itself'
              ? 'Ben:' + lastMessage.message
              : lastMessage.message}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ChatCard;
