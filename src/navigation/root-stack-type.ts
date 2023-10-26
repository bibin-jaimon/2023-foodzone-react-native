import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Home: undefined;
  CreateAccount: undefined;
  ItemDetails: undefined;
  Cart: undefined;
};

export type HomeNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>;

export type ItemDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  'ItemDetails'
>;

export type CartNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  'Cart'
>;
