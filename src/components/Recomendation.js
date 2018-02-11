import React, { Component } from 'react';
import {Text,View,Dimensions,Image} from 'react-native';

const wd = Dimensions.get('window').width;

class Recomendation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerProduct}>
          <Image 
          source={{uri: 'https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg'}} 
          style={{height:200,width:wd*0.4}}
          />
           <Text>Description</Text>
          <Text>Rp. 300.000,00</Text>
        </View>

        <View style={styles.containerProduct}>
          <Image 
          source={{uri: 'https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg'}} 
          style={{height:200,width:wd*0.4}}
          />
           <Text>Description</Text>
          <Text>Rp. 300.000,00</Text>
        </View>

        <View style={styles.containerProduct}>
          <Image 
          source={{uri: 'https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg'}} 
          style={{height:200,width:wd*0.4}}
          />
          <Text>Description</Text>
          <Text>Rp. 300.000,00</Text>
        </View>

        <View style={styles.containerProduct}>
          <Image 
          source={{uri: 'https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg'}} 
          style={{height:200,width:wd*0.4}}
          />
          <Text>Description</Text>
          <Text>Rp. 300.000,00</Text>
        </View>
        
      </View>
    );
  }
}

const styles = {
	container:{
     height:500,
     width:wd,
     backgroundColor:'#e3e9f4',
     flexDirection:'row',
     justifyContent:'space-around',
     flexWrap:'wrap'
  },
  containerProduct:{
	   height:240,
     width:wd*0.4,
     backgroundColor:'white',
     margin:5
     
	}
}

export default Recomendation;

