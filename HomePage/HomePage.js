import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function HomePage() {

    const goToHome = () => {
        Actions.HomePage()
    }

  return (
    <View style={styles.container}>
      <Text className='heading'>Tetra Lounge</Text>
      <div style={styles.buttons}>
        <button className='sign-up'>Sign Up</button>
        <button className='login'>Login</button>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    fontSize: '1em',
    justifyContent: 'center',
  }
});