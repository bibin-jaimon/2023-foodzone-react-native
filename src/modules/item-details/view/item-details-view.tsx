import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RestaurentCard } from '../../../components';
import { CusinieCard } from './cusinie-card';
import { cartSlice } from '../../cart';
import { Cuisine, Restaurent } from '../../../model';

interface ItemDetailsViewProps {}

const ItemDetailsViewContainer = (props: ItemDetailsViewProps): JSX.Element => {
  const selectedRestaurent = useAppSelector(
    state => state.itemDetails.selectedHotel,
  );

  const currentCartRestaurentId = useAppSelector(
    state => state.cart.currentResturentID,
  );
  const dispatch = useAppDispatch();
  const cartMap = useAppSelector(state => state.cart.itemMap);

  const getCurrentCartItemCount = (cuisineID: number) => {
    return currentCartRestaurentId == selectedRestaurent?.id
      ? cartMap[cuisineID]
      : 0;
  };

  const onChangeCartCount =
    (cuisine: Cuisine, restaurent: Restaurent) => (count: number) => {
      if (currentCartRestaurentId === null) {
        dispatch(cartSlice.actions.updateCurrentResturentId(restaurent.id));
        dispatch(cartSlice.actions.updateCount({ id: cuisine.id, count }));
      } else {
        //Handle add item from different restaurent
        if (currentCartRestaurentId === restaurent.id) {
          dispatch(cartSlice.actions.updateCount({ id: cuisine.id, count }));
        } else {
          dispatch(cartSlice.actions.clearCart());
          dispatch(cartSlice.actions.updateCurrentResturentId(restaurent.id));
          dispatch(cartSlice.actions.updateCount({ id: cuisine.id, count }));
        }
      }
    };

  return (
    <ScrollView>
      <View>
        {selectedRestaurent && <RestaurentCard product={selectedRestaurent} />}
        <View style={styles.menuContainer}>
          <Text>~ MENU ~</Text>
        </View>
        {selectedRestaurent?.cuisines &&
          selectedRestaurent.cuisines.map(cuisine => {
            return (
              <CusinieCard
                key={cuisine.id}
                cuisine={cuisine}
                itemCount={getCurrentCartItemCount(cuisine.id)}
                onChangeCount={(count: number) =>
                  onChangeCartCount(cuisine, selectedRestaurent)(count)
                }
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
