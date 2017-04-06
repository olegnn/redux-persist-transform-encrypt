/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { compose, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';

function counter(state = 0, action) {
  return state;
}

const store = createStore(
  counter,
  undefined,
  compose(
    autoRehydrate()
  )
);

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key'
});

persistStore(store, {
  storage: AsyncStorage,
  transforms: [
    encryptor
  ]
});

export default class ReactNativeExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeExample', () => ReactNativeExample);
