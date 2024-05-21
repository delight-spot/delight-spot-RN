import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedHomeScreen from '../../screens/FeedHomeScreen';

const Stacks = createNativeStackNavigator();

export default function FeedStackNavigator() {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="StackFeedHome" component={FeedHomeScreen} />
    </Stacks.Navigator>
  );
}
