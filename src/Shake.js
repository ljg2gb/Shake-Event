import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DeviceMotion from 'expo-sensors'

export default function Shake() {
    const [data, setData] = useState({});

    useEffect(() => {
      _subscribe();
      return () => {
        _unsubscribe();
      };
    }, []);
    
    const _setInterval = () => {
      DeviceMotion.setUpdateInterval(77);
    };
    
    const _subscribe = () => {
      DeviceMotion.addListener((devicemotionData) => {
        setData(devicemotionData.acceleration);
      });
      _setInterval();
    };
    
    const _unsubscribe = () => {
      DeviceMotion.removeAllListeners();
    };

    return (
      <View style={styles.container}>
          <Text>shake component</Text>
      </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});