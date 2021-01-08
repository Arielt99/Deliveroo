import React, { Component } from "react";
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Deliveroo"
          onPress={() => this.props.navigation.navigate('HomeDeliveroo')}
        />
      </View>
    );
  }
}