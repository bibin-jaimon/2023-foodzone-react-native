import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { fetchProducts } from '../networking/products-list';
import { Product } from '../model/product';
import { HotelCard } from './hotel-card';
import { useDispatch } from 'react-redux';

const HomeView = (): JSX.Element => {
  const [product, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  

  //To fetch initial resturent data
  useEffect(() => {
    fetchProducts().then(products => {
      console.log({ products });
      setProducts(products);
    });
  }, []);

  const handleOnPressHotelCard = (item: Product) => {
    console.log({ itemName: item.name });
  };

  return (
    <View>
      {product.map((item: Product) => (
        <Pressable key={item.id} onPress={() => handleOnPressHotelCard(item)}>
          <HotelCard product={item} />
        </Pressable>
      ))}
    </View>
  );
};

export { HomeView };
