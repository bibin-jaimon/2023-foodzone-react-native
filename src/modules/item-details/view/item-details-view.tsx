import { Text, View } from 'react-native';
import { useAppSelector } from '../../../app/hooks';

interface ItemDetailsViewProps {}

const ItemDetailsViewContainer = (props: ItemDetailsViewProps): JSX.Element => {
  // get selected hotel details and render it from store
  const item = useAppSelector(state => state.itemDetails.selectedHotel);
  return (
    <View>
      <Text>{item?.name}</Text>
    </View>
  );
};

export { ItemDetailsViewContainer };
