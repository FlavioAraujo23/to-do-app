import React from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'

interface TextFieldProps extends TextInputProps {
  label: string
}

const TextField: React.FC<TextFieldProps> = ({ label, ...inputProps }) => (
  <View>
    <Text>{label}</Text>
    <TextInput {...inputProps} />
  </View>
)

export default TextField
