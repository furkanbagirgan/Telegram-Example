import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#179CDE',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  header:{
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 20
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
    height: 45,
    borderRadius: 20,
    backgroundColor: 'white'
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