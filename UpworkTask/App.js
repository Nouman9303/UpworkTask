/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {store} from './redux/store/store';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Login from './Screens/login';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main}>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
