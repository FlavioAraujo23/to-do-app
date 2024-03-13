import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './styles/styles'

const TextField = ({ ...inputProps }) => (
  <View style={styles.container}>
    <TextInput {...inputProps} style={styles.input} />
  </View>
)

export default TextField
