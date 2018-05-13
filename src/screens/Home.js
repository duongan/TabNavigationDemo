import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to Home Screen </Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Setting')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
