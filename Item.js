import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';

class Item extends Component {
  render() {
    // Return our todo list items as an array of <Text/> 
    // components to be rendered on screen
    return (
      <View>
        <Text>{this.props.itemText}</Text>
        <Button title="REMOVE" />
      </View>
    );
  }
}

export default Item;