import React,{Component} from 'react';
import {View,Text,Dimensions} from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
 
const wd = Dimensions.get('window').width;
const datacarousel = [
  {
      "id": 339964,
      "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
  },
  {
      "id": 315635,
      "imagePath": "https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
  },
 
  {
      "id": 339403,
      "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
  },
];

class Carouse extends Component{
	render(){
		return(
			<SwipeableParallaxCarousel
			navigation={true} 
			data={datacarousel}/>
		)
	}
}

export default Carouse;