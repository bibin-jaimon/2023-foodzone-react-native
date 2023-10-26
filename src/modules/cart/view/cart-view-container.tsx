import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../../app/hooks';

const CartViewContainer = () => {
  const selectedRestaurent = useAppSelector(
    state => state.itemDetails.selectedHotel,
  );
  const cartMap = useAppSelector(state => state.cart.itemMap);

  let totalPrice = 0;
  let currentCurrency = selectedRestaurent?.cuisines?.[0].currency;
  const selectedCuisines = selectedRestaurent?.cuisines.filter(cuisine => {
    if (cartMap[cuisine.id] != undefined) {
      totalPrice += cartMap[cuisine.id] * cuisine.price;
      return true;
    }
    return false;
  });

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text>{'Ordering from:'}</Text>
          <Text style={styles.heading}>{selectedRestaurent?.name}</Text>
          {selectedCuisines?.map(item => {
            return (
              <View key={item.id} style={styles.itemContainer}>
                <Text>
                  {item.name} x {cartMap[item.id]}
                </Text>
                <Text>
                  {item.currency}
                  {item.price * cartMap[item.id]}
                </Text>
              </View>
            );
          })}
          <View style={[styles.itemContainer]}>
            <Text style={styles.totalText}>{`Total`}</Text>
            <Text style={styles.totalText}>
              {currentCurrency}
              {totalPrice}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Pressable
        onPress={() => {
          // Procced to checkout
        }}>
        <View style={[styles.proceedButton, styles.shadow]}>
          <Text style={styles.proceedPayment}>Proceed payment</Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    paddingBottom: 100,
  },
  heading: { fontSize: 30, fontWeight: '800', marginBottom: 20 },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  totalText: {
    fontSize: 24,
    fontWeight: '700',
  },
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  proceedButton: {
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  proceedPayment: { fontSize: 24, fontWeight: '600' },
});

export { CartViewContainer };
