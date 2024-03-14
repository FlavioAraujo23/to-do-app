import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title: string
  onPress?: (event: GestureResponderEvent) => void
}

const SubmitButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="w-full h-8 rounded text-lg text-center font-bold shadow-md"
      style={{ backgroundColor: '#5AC7AA' }}
      onPress={onPress}
    >
      <Text className="text-white text-center pt-1">{title}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton
