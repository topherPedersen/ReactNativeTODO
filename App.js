import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };
  }

  handleOnChangeText(text) {
    var oldState = this.state;
    var newState = oldState;
    newState.text = text;
    this.setState(newState);
  }

  handleAddItem() {

    // Get state
    var oldState = this.state;
    var newState = oldState;

    // Get todo list items
    var oldList = this.state.items;
    var newList = oldList.slice();

    // Add new item to todo list
    var indexOfNewItem = newList.length;
    newList[indexOfNewItem] = this.state.text;
    newState.items = newList;

    // Remove submitted text from TextInput
    newState.text = '';
    
    // Set state
    this.setState(newState);
  }

  handleRemoveItem(itemToBeRemoved) {

    // Get state
    var oldState = this.state;
    var newState = oldState;

    // Create new empty list which will hold all
    // of our previous todo items EXCEPT the itemToBeRemoved
    var newList = new Array();
    var numberOfItems = this.state.items.length;
    for (var i = 0; i < numberOfItems; i++) {
      if (this.state.items[i] !== itemToBeRemoved) {
        var indexOfNextItem = newList.length;
        newList[indexOfNextItem] = this.state.items[i]
      }
    }
    newState.items = newList;

    // Set state
    this.setState(newState);
  }

  // TODO: create addItemToList() function

  // TODO: create removeItemFromList() function

  render() {
    return (
      <View>

        <Text>ReactNativeTODO</Text>

        <List 
          items={ this.state.items } 
          removeItem={ (itemToBeRemoved) => this.handleRemoveItem(itemToBeRemoved) } />

        <Text>----------------------</Text>
        <Text>{this.state.text}</Text>
        <Text>----------------------</Text>

        <TextInput
          placeholder="Enter TODO List Items Here"
          onChangeText={ (text) => this.handleOnChangeText(text) }
          value={this.state.text} />

        <Button 
          onPress={ () => this.handleAddItem() }
          title="ADD"/>

      </View>
    );
  }
}

export default App;