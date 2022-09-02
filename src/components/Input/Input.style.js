import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  lightContainer: {
    width: '100%',
    height: 45,
    paddingHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#8C8C8C',
    backgroundColor: 'white'
  },
  darkContainer: {
    width: '100%',
    height: 45,
    paddingHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  input:{
    marginLeft: 5,
    flex: 1,
    color: '#000',
  }
});

export default styles;