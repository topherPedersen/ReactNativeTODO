import React, { Component } from 'react';
import { View, Image, TextInput, Button, StyleSheet } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { 
  ApplicationProvider, 
  Layout, 
  Text,
  TopNavigation,
  TopNavigationAction
} from 'react-native-ui-kitten';
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

  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>

        <Layout>

            <TopNavigation 
              alignment='center'
              title="ReactNativeTODO?" />

            <View style={{flex: 85, flexDirection: 'row'}}>
              <List 
                items={ this.state.items } 
                removeItem={ (itemToBeRemoved) => this.handleRemoveItem(itemToBeRemoved) } />
            </View>

            <View style={{flex: 15, flexDirection: 'row'}}>
              <View style={{flex: 75}}>
                <TextInput
                  placeholder="Enter TODO List Items Here"
                  onChangeText={ (text) => this.handleOnChangeText(text) }
                  value={this.state.text} />
              </View>
              <View style={{flex: 25}}>
                <Button 
                  onPress={ () => this.handleAddItem() }
                  title="ADD"/>
              </View>
            </View>

        </Layout>

      </ApplicationProvider>
    );
  }
}

/*
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  text: { marginVertical: 16 },
});
*/

export default App;