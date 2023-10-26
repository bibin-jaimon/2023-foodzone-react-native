import { Pressable, Text, View } from 'react-native';

interface AuthButtonProps {
  onPress?: () => void;
}
const AuthButton = (props: AuthButtonProps) => {
  const { onPress } = props;
  const buttonText: string = 'Signin';
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export { AuthButton };
