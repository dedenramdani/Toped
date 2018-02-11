import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Icon,Footer} from 'native-base';


import Contact from './Contact';
import Home from './Home';
import About from './About';
import Porto from './Porto';

const TabMain = TabNavigator({
	Home:{screen:Home},
	Contact:{screen:Contact},
	About:{screen:About},
	Port:{screen:Porto}
},{
	 tabBarPosition: 'bottom',
	 tabBarOptions:{
	 	style: {
        backgroundColor: '#42B549'
      	}
  	}
	 
})

class Main extends Component{
	render(){
		return(
			<TabMain/>
		)
	}
}


export default Main;