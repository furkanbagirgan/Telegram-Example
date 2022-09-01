import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    paddingHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'white'
  },
  input:{
    marginLeft: 5,
    flex: 1,
    color: '#000',
  }
});

export default styles;