import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class List extends Component {
  render() {

    // Create an empty array to hold each item in our todo list
    var listItemElements = [];

    // Iterate over this.props.items, and add each item to our
    // empty list as a <Text/> component
    for (var i = 0; i < this.props.items.length; i++) {
      listItemElements.push(<Text>{this.props.items[i]}</Text>);
    }

    // Return our todo list items as an array of <Text/> 
    // components to be rendered on screen
    return (
      <View>{listItemElements}</View>
    );
  }
}

export default List;
