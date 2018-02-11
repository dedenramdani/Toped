import React, { Component } from 'react';
import {Text,View} from 'react-native';

class Secondmenu extends Component {
  render() {
    return (
      <View style={styles.container}>
     	<Text>Logo</Text>
     	<Text>Logo</Text>
     	<Text>Logo</Text>
     	<Text>Logo</Text>
     	<Text>Logo</Text>
      </View>
    );
  }
}

const styles = {
	container:{
		height:60,
		backgroundColor:'#d5d9e0',
		justifyContent:'space-around',
		flexDirection:'row',
		alignItems:'center'
	}
}

export default Secondmenu;

