import { StyleSheet } from 'react-native';

const styles=StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#8C8C8C',
    backgroundColor: 'white',
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default styles;