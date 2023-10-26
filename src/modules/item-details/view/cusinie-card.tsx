import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Cuisine } from '../../../model';
import { Counter } from '../../../components';

interface CusinieCardProps {
  cuisine: Cuisine;
  onChangeCount: (count: number) => void
  itemCount?: number
}

const CusinieCard = (props: CusinieCardProps) => {
  const { cuisine, onChangeCount, itemCount = 0 } = props;

  const cusinieItems = cuisine.items.join(', ');

  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{cuisine.name}</Text>
        <Text numberOfLines={0} style={{}}>
          {cusinieItems}
        </Text>
        <Text style={styles.currency}>
          {cuisine.currency}
          {cuisine.price}
        </Text>
        <Counter currentCount={itemCount} onChange={onChangeCount} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: cuisine.imageURL }} style={styles.image} />
      </View>
    </View>
  );
};

type CuisineCardStyle = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  name: TextStyle;
  textContainer: ViewStyle;
  currency: TextStyle;
  shadow: ViewStyle;
};

const styles = StyleSheet.create<CuisineCardStyle>({
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  textContainer: {
    flex: 2,
    paddingRight: 4,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'green',
    height: 150,
    width: '40%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    paddingVertical: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
  currency: {
    paddingVertical: 8,
    fontWeight: '600',
    fontSize: 16,
  },
});

export { CusinieCard };
