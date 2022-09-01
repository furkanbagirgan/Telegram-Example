import {Dimensions,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  divider: {
    width: Dimensions.get('screen').width - 94,
    height: 0.7,
    backgroundColor: '#ddd',
    alignSelf: 'flex-end',
    marginRight: 15,
  },
});

export default styles;