import { Image, Pressable, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

//networking and types
import { fetchProducts } from '../networking/products-list';

//components

import { itemDetailSlice } from '../../item-details';
import { useNavigation } from '@react-navigation/native';
import { Restaurent } from '../../../model';
import { useAppDispatch } from '../../../app/hooks';
import { HomeNavigationProps } from '../../../navigation';
import { RestaurentCard } from '../../../components';
import Animated from 'react-native-reanimated';

const HomeView = (): JSX.Element => {
  const [product, setProducts] = useState<Restaurent[]>([]);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeNavigationProps>();
  //To fetch initial resturent data
  useEffect(() => {
    fetchProducts().then(products => {
      setProducts(products);
    });
  }, []);

  const handleOnPressHotelCard = (item: Restaurent) => {
    dispatch(itemDetailSlice.actions.setSelectedHotel(item));
    navigation.navigate('ItemDetails');
  };

  return (
    <View>
      {product.map((item: Restaurent) => (
        <Pressable key={item.id} onPress={() => handleOnPressHotelCard(item)}>
          <Animated.View sharedTransitionTag={`${item.id}`}>
            <RestaurentCard product={item} />
          </Animated.View>
        </Pressable>
      ))}
    </View>
  );
};

export { HomeView };
