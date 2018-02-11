import React, { Component } from 'react';
import {Text,View,
        TextInput,ScrollView,
        Dimensions,
        TouchableWithoutFeedback,
        Keyboard
      } from 'react-native';

import {Icon,Badge} from 'native-base';      
const wd = Dimensions.get('window').width;


class Header extends Component<Props>{
  constructor(){
    super()
    this.state = {
      menuItems: [{id:1,menu:'Home'},{id:2,menu:'Feed'},{id:3,menu:'Payment'},
                  {id:4,menu:'About'},{id:5,menu:'Contact'},{id:6,menu:'Credit'},
                  {id:7,menu:'Promotion'},{id:8,menu:'Hot'},{id:9,menu:'New Items'}],
      isCancel : true            
  }
  
}

renderMenu(){
  return this.state.menuItems.map(
    (item)=>(
    <Text key={item.id} style={styles.menuStyle}> {item.menu} </Text>)
    )
}

handleCancel = ()=>{
  this.setState({isCancel:!this.state.isCancel})
}
handleLogo = ()=>{
   Keyboard.dismiss()
   this.setState({isCancel:true})
  
}


render() {

    const txtOrLogo = this.state.isCancel ? <View style={styles.badgeStyle}>
    <Icon style={{color:'white'}} name="ios-notifications-outline"/><Text style={styles.badgeStyleTxt}>2</Text>
    </View>
     : <Text onPress={this.handleLogo} style={styles.txtColor} >Cancel</Text>

    return (
      <View style={styles.container}>
        <View style={styles.viewWrapStyle}>
          
          <View style={styles.viewStyleTextInput}>
            <Icon name="ios-search-outline" style={styles.iconSearch}/>
           <TextInput
              onFocus={this.handleCancel}
              onEndEditing ={this.handleLogo}
              onSubmitEditing={this.handleLogo}
              placeholder = 'search your product'
              placeholderTextColor='grey' 
              underlineColorAndroid='transparent'
              style={styles.textInputStyle} />
          </View>
           
          <View style={styles.iconNotifStyle}>
          {txtOrLogo}
          </View>
           
          </View>
         
         <ScrollView 
         style={styles.scrollStyle} 
         showsHorizontalScrollIndicator={false}
         horizontal={true}>
         {this.renderMenu()}
         </ScrollView>
      </View>
    );
  }
}

const styles = {
  container :{
    height : 100,
    backgroundColor :'#42B549',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'flex-start'
  },
  viewWrapStyle:{
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  viewStyleTextInput:{
    flexDirection:'row',
    backgroundColor:'white',
    height:35,
    width:wd*0.75,
    marginLeft:20,
    borderRadius:5,
    alignItems:'center'
  },
  textInputStyle:{
    backgroundColor:'white',
    width:240,
    borderRadius:5
  },
  scrollStyle:{
    backgroundColor:'#42B549',
    marginTop:10,
    width:wd
  },
  iconNotifStyle:{
    marginLeft:14
  },
  iconSearch:{
    fontSize:20,
    paddingLeft:10
  },
  badgeStyle:{
    flexDirection:'row'
  },
  badgeStyleTxt:{
    fontSize:9,
    backgroundColor:'red',
    color:'white',
    height:15,
    borderRadius:50,
    paddingLeft:4,
    paddingBottom:4,
    paddingRight:4,
    marginLeft:-10
  },
  txtColor:{
    color:'white'
  },
  menuStyle:{
    color:'white',
    fontSize:20,
    marginRight:30,
    fontWeight:'bold'
  }


}


export default Header;