import {Dimensions, StyleSheet} from 'react-native';

//Here the styles of the contactCard are created.
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  imageWrapper: {
    width: 54,
    height: 54,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 27,
  },
  chatWrapper: {
    width: Dimensions.get('screen').width - 94,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  lightReceiver: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  lightUserName: {
    color: 'black',
  },
  darkReceiver: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  darkUserName: {
    color: 'white',
  },
});

export default styles;
