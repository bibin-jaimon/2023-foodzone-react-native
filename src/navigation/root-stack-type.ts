import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Home: undefined;
  CreateAccount: undefined;
  ItemDetails: undefined;
};

export type HomeNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>;
export type ItemDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  'ItemDetails'
>;
