import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { AuthButton, CreatAccount } from '../modules/authentication';
import { HomeView } from '../modules/home';
import { ItemDetailsViewContainer } from '../modules/item-details';
import { RootStackParamsList } from './root-stack-type';
import { CartButton, CartViewContainer } from '../modules/cart';
import { useAppSelector } from '../app/hooks';
import { useNavigation } from '@react-navigation/native';

//Screens

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const cartItemCount = useAppSelector(state => state.cart.count);
  const navigation = useNavigation();
  const onPressCartButton = () => {
    navigation.navigate('Cart');
  };
  const onPressAuthButton = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <Stack.Navigator screenOptions={{ title: '', headerTitleAlign: 'center' }}>
      <Stack.Group
        screenOptions={{
          headerRight: () => (
            <CartButton count={cartItemCount} onPress={onPressCartButton} />
          ),
        }}>
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            title: 'FZone',
            headerLeft: () => <AuthButton onPress={onPressAuthButton} />,
          }}
          name="Home"
          component={HomeView}
        />
        <Stack.Screen name="ItemDetails" component={ItemDetailsViewContainer} />
      </Stack.Group>
      <Stack.Screen
        name="CreateAccount"
        component={CreatAccount}
      />
      <Stack.Screen
        name="Cart"
        component={CartViewContainer}
        options={{ title: 'FCart' }}
      />
    </Stack.Navigator>
  );
};

export { RootNavigator };
