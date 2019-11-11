import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';

class Item extends Component {
  render() {
    // Return our todo list items as an array of <Text/> 
    // components to be rendered on screen
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>{this.props.itemText}</Text>
        </View>
        <View style={{paddingLeft: 25}}>
          <Button 
            title="REMOVE" 
            onPress={ () => this.props.removeItem(this.props.itemText) } />
        </View>
      </View>
    );
  }
}

export default Item;