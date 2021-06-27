import React, { Component } from 'react';
import { View, Switch, StyleSheet , Text} from "react-native";
import firebase from 'firebase';


var state1;
var state2;
var state3;
var state4;

const firebaseConfig = {
  apiKey: 'AIzaSyAMKuHoGBGGHv7GfQS5wQjh0V_j3mNgm6U',
  authDomain: 'sems-6fa94.firebaseio.com',
  databaseURL: 'https://sems-6fa94.firebaseio.com',
  projectId: 'Xsems-6fa94',
  storageBucket: 'sems-6fa94.appspot.com',
  messagingSenderId: '904199881266',
  appId: '1:904199881266:android:e645438a43a687b421f22b'
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

export default class FirebaseFriendsFlatList extends Component {
  

  

  componentDidMount() {
   
    firebase.database().ref('/switch1').on('value', (snapshot) => {
      const rec = snapshot.val();
      state1 = rec==1 ? true : false;
      this.setState({status:state1})
     
    });
    firebase.database().ref('/switch2').on('value', (snapshot) => {
      const rec = snapshot.val();
      state2 = rec==1 ? true : false;
      this.setState({status:state2})
     
    });
    firebase.database().ref('/switch3').on('value', (snapshot) => {
      const rec = snapshot.val();
      state3 = rec==1 ? true : false;
      this.setState({status:state3})
     
    });
    firebase.database().ref('/switch4').on('value', (snapshot) => {
      const rec = snapshot.val();
      state4 = rec==1 ? true : false;
      this.setState({status:state4})
     
    });
  }

  press1(){
    
    firebase.database()
    .ref('/switch1')
    .set(!state1*1)

  }
  press2(){
    
    firebase.database()
    .ref('/switch2')
    .set(!state2*1)

  }
  press3(){
    
    firebase.database()
    .ref('/switch3')
    .set(!state3*1)

  }
  press4(){
    
    firebase.database()
    .ref('/switch4')
    .set(!state4*1)

  }
  
 
  
  
  
  render() {
  
    return (
       <View style={styles.container}>
<View style={styles.staple}>
      <Text style={{paddingRight:30}}>LIGHT</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={state1 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.press1}
        value={state1}
      />
</View>
<View style={styles.staple}>
      <Text style={{paddingRight:30}}>LIGHT</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={state2 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.press2}
        value={state2}
      />
</View>
<View style={styles.staple}>
      <Text style={{paddingRight:30}}>LIGHT</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={state3 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.press3}
        value={state3}
      />
</View>
<View style={styles.staple}>
      <Text style={{paddingRight:47}}>FAN</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={state4 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.press4}
        value={state4}
      />
</View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  staple :{
    flexDirection:'row',
    paddingBottom: 40,
    transform: [{ scaleX: 2 }, { scaleY: 2 }]
  }
});