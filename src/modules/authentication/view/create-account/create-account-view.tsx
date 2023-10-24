import { Pressable, Text, TextInput, View } from 'react-native';

const CreatAccount = (): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="username"
        style={{ margin: 10, padding: 10, borderWidth: 1, width: '60%' }}
      />
      <TextInput
        placeholder="password"
        style={{ margin: 10, padding: 10, borderWidth: 1, width: '60%' }}
      />
      <Pressable
        style={{ margin: 15, padding: 10, borderWidth: 1, width: '50%' }}
        onPress={() => {
          console.log('auth success');
        }}>
        <Text style={{ alignSelf: 'center' }}>Create Account</Text>
      </Pressable>
    </View>
  );
};

export { CreatAccount };
