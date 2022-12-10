import React,{Component} from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import Feed from "../screens/Feed";
import Firebase from "firebase";

import CreateStory from "../screens/CreateStory";
import { firebaseConfig } from "../config";
const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  constructor(props){
    super(props);
    this.state = {
      dark_theme:true,
      isUpdated:false,
      
    };

  }

  renderFeed = props =>{
    return<Feed setUpdateToFalse = {this.removeUpdated} { ...props}/>; 
  };

  renderStory = props =>{
    return<CreateStory setUpdateToTrue = {this.changeUpdated} {...props}/>;
  };

  changeUpdated = () =>{
    this.setState({
      isUpdated:true
    });
  };

  removeUpdated = () =>{
    thisetState({
      isUpdated:false
    });
  };

componentDidmount(){
  let theme;
  Firebase
  .database()
  .ref("/users/" + firebase.auth().currentUser.uid)
  .on("value",function(snaphot){
    theme = snapshot.val().current_theme;
  });
  this.setState({
    dark_theme:theme === "dark"?true:false
  });
}
  
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    labeled = {false}
    barStyle = {
      this.state.dark_theme
      ?styles.bottomTabStyleDark
      :styles.bottomTabStyle
    }
    screenOptions = {({route}) =>({
      tabBarIcon:({focused,color,size}) =>{
        let iconNane;
        if(route.name === "Feed"){
         iconName = focused ?"Home":"Home-outline" ;
        }
        else if( route.name === "CreateStory" ){
          iconName = focused ? "add-circle" : "add-circle-outline";
        }
        return(
          <Ionicons
          name = {iconName}
          size = {RFValue(25)}
          color = {color}
          style = {styles.icons}
          
          />
        );
      }
    })}

    activeColor = {"#ee8249"}
    inactiveColor = {gray}
    >
<Tab.screen
      
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;
