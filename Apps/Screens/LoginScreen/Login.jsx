import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('./../../../assets/images/login.png')} 
      style={styles.LoginImage} />
    </View>
  )
}

// rns
const styles = StyleSheet.create({
  LoginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: '#000',
  }
})
