import { StyleSheet } from 'react-native'
import { theme } from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    paddingTop: 5,
    marginBottom: 10,
  },
  input: {
    width: 300,
    fontSize: 20,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.gray,
  },
})
