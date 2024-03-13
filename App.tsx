import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { theme } from './src/theme';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors.green} barStyle={'default'}/>
      <Routes />
    </NavigationContainer>
  );
}


