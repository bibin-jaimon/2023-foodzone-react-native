import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { fetchProducts } from '../networking/products-list';
import { Product } from '../model/product';
import { HotelCard } from './hotel-card';

const HomeView = (): JSX.Element => {
  const [product, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(products => {
      console.log({ products });
      setProducts(products);
    });
  }, []);

  const handleOnPressHotelCard = (item: Product) => {
    console.log({itemName: item.name})
  }

  const imageURI = product[0] && { uri: product[0].image };
  console.log({ imageURI });
  return (
    <View>
      {product.map((item: Product) => (
        <Pressable onPress={() => handleOnPressHotelCard(item)}>
          <HotelCard key={item.id} product={item} />
        </Pressable>
      ))}
    </View>
  );
};

export { HomeView };
