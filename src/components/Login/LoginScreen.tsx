import { Alert, Text, TouchableOpacity, View } from 'react-native'
import TextField from '../Form/TextField'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import SubmitButton from '../Buttons/SubmitButton'
import { StackType } from '../../@types'
interface FormData {
  email: string
  password: string
}

const LoginScreen = () => {
  const { register, setValue, handleSubmit } = useForm<FormData>()
  const navigation = useNavigation<StackType>()

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  const onSubmit = (data: FormData) => Alert.alert(data.email, data.password)

  return (
    <Animatable.View
      animation="fadeInUp"
      className="flex flex-col justify-between items-center gap-2 w-full"
    >
      <Text className="font-bold text-center text-3xl">Login</Text>
      <View className="w-3/4">
        <TextField
          placeholder={'Email Address'}
          onChangeText={(text: string) => setValue('email', text)}
        />
        <TextField
          placeholder={'Password'}
          onChangeText={(text: string) => setValue('password', text)}
        />
        <SubmitButton onPress={handleSubmit(onSubmit)} title="Login" />
      </View>
      <View className="w-full h-12 flex flex-col items-center text-gray-400 pt-1">
        <Text className="text-gray-400/80">Do not have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text className="border-b w-14 text-gray-400/80 hover:text-gray-300 underline-offset-1">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  )
}

export default LoginScreen
