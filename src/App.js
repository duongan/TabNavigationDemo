import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Setting from './screens/Setting';
import Details from './screens/Details';

const HomeStack = createStackNavigator({
  Home: Home,
  Details: Details
});

const SettingsStack = createStackNavigator({
  Setting: Setting,
  Details: Details,
});

const Root = TabNavigator(
  {
    Home: HomeStack,
    Setting: SettingsStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Setting') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <Root />
    );
  }
}
