import 'react-native-gesture-handler';
import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import { ShakeEventExpo } from './src/ShakeEventExpo';

export default class App extends Component {
  componentWillMount() {
    ShakeEventExpo.addListener(() => {
        Alert.alert('Shaking!!!');
    });
   }
     
  componentWillUnmount() {
    ShakeEventExpo.removeListener();
  }
  render() {
    return <View></View>
  }
}

// export default function App() {

//   const [data, setData] = useState({});
//   const [triggered, setTriggered] = useState(false);

//   let {x, y, z} = data
//   x = Math.round(x)
//   y = Math.round(y)
//   z = Math.round(z)

//   useEffect(() => {
//     _subscribe();
//     return () => {
//       _unsubscribe();
//     };
//   }, []);
  
//   const _setInterval = () => {
//     DeviceMotion.setUpdateInterval(700000);
//   };
  
//   const _subscribe = () => {
//     DeviceMotion.addListener((devicemotionData) => {
//       setData(devicemotionData.acceleration);
//       isShake();
//     });
//       _setInterval();
    
//   };
  
//   const _unsubscribe = () => {
//     DeviceMotion.removeAllListeners();
//   };

//   const isShake = () => {
//     let {x, y, z} = data
//     x = Math.round(x)
//     y = Math.round(y)
//     z = Math.round(z)
//     if (x === 1) {
//       // setTriggered(true)
//       console.log("x is 1", x === 1)
//     }

//     // // add an appropriate event listener
//     // data.addEventListener("trigger", function(e) { process(e.detail) });

//     // // create and dispatch the event
//     // const event = new CustomEvent("trigger", {
//     //   detail: {
//     //     triggered: true
//     //   }
//     // });
//     // obj.dispatchEvent(event);
//   }
//   return (
//     <View style={styles.container}>
//         <Text>shake component</Text>
//         <Text>{x}</Text>
//         <Text>{y}</Text>
//         <Text>{z}</Text>
//         {/* <Text>{triggered}</Text> */}
//         {/* <Text>{triggered ? "True" : "False"}</Text> */}

//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});