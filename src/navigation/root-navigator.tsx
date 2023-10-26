import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { CreatAccount } from '../modules/authentication';
import { HomeView } from '../modules/home';
import { ItemDetailsViewContainer } from '../modules/item-details';
import { RootStackParamsList } from './root-stack-type';
import { CartButton } from '../modules/cart';
import { useAppSelector } from '../app/hooks';

//Screens

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const cartItemCount = useAppSelector(state => state.cart.count);

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerRight: () => <CartButton count={cartItemCount} />,
        }}>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="ItemDetails" component={ItemDetailsViewContainer} />
      </Stack.Group>
      <Stack.Screen name="CreateAccount" component={CreatAccount} />
    </Stack.Navigator>
  );
};

export { RootNavigator };
