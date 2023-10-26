import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { dimension } from '../../resources';

interface CounterProp {
  onChange: (count: number) => void;
}

const Counter = (props: CounterProp) => {
  const { onChange } = props;
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevState => {
      const newCount = prevState + 1;
      onChange(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount(prevState => {
      let newCount = prevState;
      if (newCount > 0) {
        newCount -= 1;
      }
      onChange(newCount);
      return newCount;
    });
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.left, styles.shadow]}>
        <Pressable style={styles.leftButton} onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </Pressable>
      </View>
      <View style={styles.center}>
        <Text>{count}</Text>
      </View>
      <View style={styles.right}>
        <Pressable style={styles.rightButton} onPress={increment}>
          <Text style={styles.text}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

type CounterStyle = {
  container: ViewStyle;
  shadow: ViewStyle;
  left: ViewStyle;
  right: ViewStyle;
  center: ViewStyle;
  leftButton: ViewStyle;
  rightButton: ViewStyle;
  text: TextStyle;
};

const styles = StyleSheet.create<CounterStyle>({
  container: {
    flex: 1,
    width: '60%',
    borderRadius: dimension.borderRadius.default,
    height: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  left: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: dimension.borderRadius.default,
  },
  leftButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    borderRadius: dimension.borderRadius.default,
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  rightButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export { Counter };
