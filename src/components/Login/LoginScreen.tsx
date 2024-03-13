import { Alert, Text, TouchableOpacity, View } from 'react-native'
import TextField from '../Form/TextField'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { styles } from './styles/style'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
interface FormData {
  email: string
  password: string
}

const LoginScreen = () => {
  const { register, setValue, handleSubmit } = useForm<FormData>()
  const navigation = useNavigation()

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  const onSubmit = (data: FormData) => Alert.alert(data.email, data.password)

  return (
    <Animatable.View animation="fadeInUp" style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextField
        placeholder={'Email Address'}
        onChangeText={(text: string) => setValue('email', text)}
      />
      <TextField
        placeholder={'Password'}
        onChangeText={(text: string) => setValue('password', text)}
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>Do not have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  )
}

export default LoginScreen
