import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Login from '../pages/Login'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
    </Stack.Navigator>
  )
}
