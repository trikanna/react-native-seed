import React, {Component} from 'react';

import styles from './app.styles';

import {
  View,
  Text
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.App}>
        <Text style={styles.Title}>it's the ReactNativeSeed!</Text>
      </View>
    );
  }
}


