import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const CreatAccount = (): JSX.Element => {
  return (
    <View style={styles.contanier}>
      <TextInput
        placeholder="username"
        placeholderTextColor={'black'}
        style={styles.textInput}
      />
      <TextInput
        placeholder="password"
        placeholderTextColor={'black'}
        style={styles.textInput}
      />
      <Pressable
        style={styles.authButton}
        onPress={() => {
          console.log('auth success');
        }}>
        <Text style={{ alignSelf: 'center' }}>Create Account</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },
  textInput: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    width: '80%',
    height: 60,
    borderRadius: 10,
  },
  authButton: {
    justifyContent: 'center',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    borderWidth: 1,
    height: 60,
    width: '60%',
  },
});

export { CreatAccount };
