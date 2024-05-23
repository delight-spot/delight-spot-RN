import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedHomeScreen from '../../screens/FeedHomeScreen';
import {feedStackNavigation} from '../../constants';

export type FeedStackParamList = {
  [feedStackNavigation.HOME]: undefined;
};

const Stacks = createNativeStackNavigator<FeedStackParamList>();

export default function FeedStackNavigator() {
  return (
    <Stacks.Navigator>
      <Stacks.Screen
        name={feedStackNavigation.HOME}
        component={FeedHomeScreen}
      />
    </Stacks.Navigator>
  );
}
