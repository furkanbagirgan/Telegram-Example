import moment from 'moment';
import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';

import styles from './ContactCard.style';

const ContactCard = ({name, image, userName, handlePress, theme}) => {
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
          <Text style={theme==='light' ? styles.lightReceiver : styles.darkReceiver}>{name}</Text>
          <Text style={theme==='light' ? styles.lightUserName : styles.darkUserName}>{'@'+userName}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ContactCard;
