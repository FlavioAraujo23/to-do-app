import { StyleSheet } from 'react-native'
import { theme } from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.colors.green,
    width: 300,
    height: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 30,
  },
  text: {
    marginTop: 10,
    color: theme.colors.gray,
  },
  signUp: {
    borderBottomWidth: 2,
    width: 56,
    marginTop: 5,
    textDecorationLine: 'underline',
    color: theme.colors.gray,
  },
})
