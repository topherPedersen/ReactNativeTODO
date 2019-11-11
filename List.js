/*
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';
import Item from './Item';


class List extends Component {
  render() {

    // Create an empty array to hold each item in our todo list
    var listItemElements = [];

    // Iterate over this.props.items, and add each item to our
    // empty list as a <Text/> component
    for (var i = 0; i < this.props.items.length; i++) {
      // listItemElements.push(<Text> {this.props.items[i]} </Text>);
      listItemElements.push(
        <View>
          <Item 
            itemText={this.props.items[i]} 
            removeItem={ (itemToBeRemoved) => this.props.removeItem(itemToBeRemoved) } />
        </View>
      );
    }

    // Return our todo list items as an array of <Text/> 
    // components to be rendered on screen
    return (
      <View>{listItemElements}</View>
    );
  }
}

export default List;
*/
