import React from 'react'
import { TextInput, View } from 'react-native'

const TextField = ({ ...inputProps }) => (
  <View className="flex flex-col gap-2 pt-1 mb-2">
    <TextInput
      {...inputProps}
      className="border-b border-b-gray-400/50 w-full focus:outline-none focus:border-b-green-500"
    />
  </View>
)

export default TextField
