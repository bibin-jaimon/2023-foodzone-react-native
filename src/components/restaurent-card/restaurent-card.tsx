import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Restaurent } from '../../model';
import { dimension } from '../../resources';

interface HotelCardProps {
  product: Restaurent;
}

const RestaurentCard = (props: HotelCardProps): JSX.Element => {
  const item = props.product;

  return (
    <View style={[styles.container, styles.shadow]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text>{`Rating: ${item.rating}`}</Text>
        <Text>{`Distance: ${item.rating} km`}</Text>
      </View>
    </View>
  );
};

type HotelCardStyle = {
  container: ViewStyle;
  shadow: ViewStyle;
  image: ImageStyle;
  details: ViewStyle;
  nameText: TextStyle;
};

const styles = StyleSheet.create<HotelCardStyle>({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: dimension.borderRadius.cardView,
  },
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: dimension.borderRadius.default,
    margin: 1,
  },
  details: {
    marginLeft: 10,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export { RestaurentCard };
