import { Pressable, StyleSheet, Text, View } from 'react-native';

interface CartButtonProps {
  count: number;
  onPress?: () => void;
}

const CartButton = (props: CartButtonProps) => {
  const { onPress, count = 0 } = props;
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <View style={styles.count}>
          <Text>{count}</Text>
        </View>
        <Text style={styles.cartText}>Cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
  },
  count: {
    position: 'absolute',
    right: 4,
    top: 4,
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderColor: 'rgba(0,0,0,0.2)',
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    fontWeight: '600',
  },
});
export { CartButton };
