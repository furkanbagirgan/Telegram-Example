import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  rowContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pickerWrapper:{
    flex: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#8C8C8C',
    borderRadius: 25,
  },
  picker:{
    width: 150,
    color: '#8C8C8C',
  },
  phoneWrapper: {
    flex: 10
  }
});

export default styles;