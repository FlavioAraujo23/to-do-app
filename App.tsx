import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { theme } from './src/theme'
import './global.css'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors.green} barStyle={'default'} />
      <Routes />
    </NavigationContainer>
  )
}
