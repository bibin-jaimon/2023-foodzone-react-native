import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { CreatAccount } from '../modules/authentication';
import { HomeView } from '../modules/home';

//Screens

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeView" component={HomeView} />
      <Stack.Screen name="CreateAccount" component={CreatAccount} />
    </Stack.Navigator>
  );
};

export { RootNavigator };
