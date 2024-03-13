import React from 'react'
import { View } from 'react-native'
import LoginScreen from '../../components/Login/LoginScreen'

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LoginScreen />
    </View>
  )
}
