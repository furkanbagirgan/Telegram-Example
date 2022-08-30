import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App.js</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
});

export default App;
