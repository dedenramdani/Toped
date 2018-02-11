import React, { Component } from 'react';
import {Text,View,Dimensions,ScrollView} from 'react-native';
import {Icon,Footer,Button,FooterTab} from 'native-base';

import Header from '../components/Header';
import Booking from '../components/Booking';
import Carouse from '../components/Carouse';
import Secondmenu from '../components/Secondmenu';
import Recomendation from '../components/Recomendation';


const wd = Dimensions.get('window').width;



class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
         <ScrollView>
          <View style={styles.twoView}>
            <View style={styles.twoView1}>
                <View style={styles.viewIconStyle}>
                  <Icon style={styles.iconStyle} name="ios-cash"/>
                </View>
                <View>
                  <Text>TokoCash</Text>
                  <Text style={styles.rpStyle}>Rp. 0 </Text>
                </View> 
            </View>
            <View style={styles.twoView2}>
                <View style={styles.viewIconStyle}>
                  <Icon style={styles.iconStyle} name="ios-mail-outline"/>
                </View>
                <View>
                  <Text>Classic Member</Text>
                  <Text style={styles.rpStyle}>Rp. 0 </Text>
                </View> 
            </View>
          </View>
            <Carouse />
           <Secondmenu />
          <Recomendation />
          <Booking />
        </ScrollView>
        <Footer>
        <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

const styles = {
  container :{
    flex:1
	},
  twoView:{
    height:45,
    flexDirection:'row',
    borderColor:'grey',
    borderTopWidth:0.6,
    borderBottomWidth:0.6
  },
  twoView1:{
    width:wd*0.5,
    height:45,
    marginLeft:10,
    flexDirection:'row',
    borderColor:'grey',
    borderRightWidth:0.5
  },
  twoView2:{
    width:wd*0.5,
    height:45,
    marginLeft:10,
    flexDirection:'row'
  },
  viewIconStyle:{
    flexDirection:'row',
    marginRight:25
  },
  iconStyle:{
    fontSize:40
  },
  rpStyle:{
    color:'red'
  }
}


export default Home;

