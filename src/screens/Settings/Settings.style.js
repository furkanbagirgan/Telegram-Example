import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 25
  },
  imageWrapper: {
    width: 150,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
});

export default styles;