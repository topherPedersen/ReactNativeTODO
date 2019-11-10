import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ["foo", "bar", "baz"]
    };
  }

  // TODO: create addItemToList() function

  // TODO: create removeItemFromList() function

  render() {
    return (
      <View>
        <Text>ReactNativeTODO</Text>
        <List items={ this.state.items } />
      </View>
    );
  }
}

export default App;
