import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '../navigation';

const RootViewContainer = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export { RootViewContainer };
