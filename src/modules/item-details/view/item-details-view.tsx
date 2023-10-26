import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useAppSelector } from '../../../app/hooks';
import { RestaurentCard } from '../../../components';
import { CusinieCard } from './cusinie-card';

interface ItemDetailsViewProps {}

const ItemDetailsViewContainer = (props: ItemDetailsViewProps): JSX.Element => {
  // get selected hotel details and render it from store
  const item = useAppSelector(state => state.itemDetails.selectedHotel);
  return (
    <ScrollView>
      <View>
        {item && <RestaurentCard product={item} />}
        <View style={styles.menuContainer}>
          <Text>~ MENU ~</Text>
        </View>
        {item?.cuisines &&
          item.cuisines.map(item => {
            const onChangeCount = (count: number) => {
              console.log(`item ${item.name} - count ${count}`);
              // update cart item count
            };
            return (
              <CusinieCard
                key={item.id}
                cuisine={item}
                onChangeCount={onChangeCount}
              />
            );
          })}
      </View>
    </ScrollView>
  );
};

type ItemDetailsViewStyle = {
  menuContainer: ViewStyle;
};

const styles = StyleSheet.create<ItemDetailsViewStyle>({
  menuContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { ItemDetailsViewContainer };
