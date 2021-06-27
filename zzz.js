import React, { useState } from "react";
import { View, Switch, StyleSheet , Text} from "react-native";
import Firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyAMKuHoGBGGHv7GfQS5wQjh0V_j3mNgm6U',
  authDomain: 'sems-6fa94.firebaseio.com',
  databaseURL: 'https://sems-6fa94.firebaseio.com',
  projectId: 'Xsems-6fa94',
  storageBucket: 'sems-6fa94.appspot.com',
  messagingSenderId: '904199881266',
  appId: '1:904199881266:android:e645438a43a687b421f22b'
  };

var state1;
var state2;
var state3;
var state4;



const App = () => {

  componentDidMount = () => {
    Firebase.database().ref('/switch1').on('value', (snapshot) => {
      const rec = snapshot.val();
      state1 = (rec==1 ? true : false);
    });
    Firebase.database().ref('/switch2').on('value', (snapshot) => {
      const rec = snapshot.val();
      state2 = (rec==1 ? true : false);
    });
    Firebase.database().ref('/switch3').on('value', (snapshot) => {
      const rec = snapshot.val();
      state3 = (rec==1 ? true : false);
    });
    Firebase.database().ref('/switch4').on('value', (snapshot) => {
      const rec = snapshot.val();
      state4 = (rec==1 ? true : false);
    });
  
  }

  const [isEnabled1, setIsEnabled1] = useState(state1);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  
  const [isEnabled2, setIsEnabled2] = useState(state2);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(state3);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const [isEnabled4, setIsEnabled4] = useState(state4);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

  return (
    <View style={styles.container}>
<View style={styles.staple}>
      <Text style={{paddingRight:30}}>LIGHT</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
      />
</View>
<View style={styles.staple}>
      <Text style={{paddingRight:30}}>LIGHT</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
</View>
<View style={styles.staple}>
      <Text style={{paddingRight:30}}>LIGHT</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch3}
        value={isEnabled3}
      />
</View>
<View style={styles.staple}>
      <Text style={{paddingRight:47}}>FAN</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch4}
        value={isEnabled4}
      />
</View>
    </View>
  );
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

export default App;