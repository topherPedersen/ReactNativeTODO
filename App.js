import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ["foo", "bar", "baz"],
      text: 'yeet'
    };
  }

  handleOnChangeText(text) {
    var oldState = this.state;
    var newState = oldState;
    newState.text = text;
    this.setState(newState);
  }

  // TODO: create addItemToList() function

  // TODO: create removeItemFromList() function

  render() {
    return (
      <View>

        <Text>ReactNativeTODO</Text>

        <List items={ this.state.items } />

        <Text>----------------------</Text>
        <Text>{this.state.text}</Text>
        <Text>----------------------</Text>

        <TextInput
          placeholder="Enter TODO List Items Here"
          onChangeText={ (text) => this.handleOnChangeText(text) }/>

      </View>
    );
  }
}

export default App;
