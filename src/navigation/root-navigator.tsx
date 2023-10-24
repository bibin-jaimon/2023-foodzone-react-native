import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { CreatAccount } from '../modules/authentication';
import { HomeView } from '../modules/home';
import { ItemDetailsViewContainer } from '../modules/item-details';
import { RootStackParamsList } from './root-stack-type';

//Screens

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="CreateAccount" component={CreatAccount} />
      <Stack.Screen name="ItemDetails" component={ItemDetailsViewContainer} />
    </Stack.Navigator>
  );
};

export { RootNavigator };
