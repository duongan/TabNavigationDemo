import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';

export default class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to Details Screen </Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Setting')}
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
