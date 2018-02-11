import React, { Component } from 'react';
import {Text,View,Dimensions} from 'react-native';
import {Icon} from 'native-base';


const wd = Dimensions.get('window').width;

class Booking extends Component {
  render() {
    return (
      <View style={styles.container}>
     	<View style={styles.subContainer1}>
     		<Text style={styles.txtStyle}>Pesan Ini Di Tokopedia</Text>
     	</View>

     	<View style={styles.subContainer2}>
     		<Icon name="camera" />
     		<Text style={styles.txtBooking}>Tiket Pesawat</Text>
     	</View>
     	<View style={styles.subContainer2}>
     		<Icon name="camera" />
     		<Text style={styles.txtBooking}>Tiket Bus</Text>
     	</View>
     	<View style={styles.subContainer2}>
     		<Icon name="camera" />
     		<Text style={styles.txtBooking}>Tiket Hiburan</Text>
     	</View>
     	<View style={styles.subContainer2}>
     		<Icon name="camera" />
     		<Text style={styles.txtBooking}>Tiket Event</Text>
     	</View>

      </View>
    );
  }
}


const styles = {
	container :{
		height : 200,
		width : wd,
		flexDirection:'row',
		flexWrap:'wrap',
		justifyContent:'space-around'
	},
	subContainer1:{
		height : 50,
		width:wd*0.9,
		alignSelf:'center',
		borderColor:'grey',
    	borderBottomWidth:0.6
	},
	txtStyle:{
		marginTop:10
	},
	subContainer2:{
		height:50,
		width:wd*0.4,
		marginTop:10,
		flexDirection:'row',
		alignItems:'center'

		},
	txtBooking:{
		marginLeft:20
	}	
}




export default Booking;

