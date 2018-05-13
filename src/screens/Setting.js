import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';

export default class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to Setting Screen </Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
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
