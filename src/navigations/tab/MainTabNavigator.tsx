import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStackNavigator from '../stack/FeedStackNavigator';

const Tabs = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="TabFeedHome" component={FeedStackNavigator} />
    </Tabs.Navigator>
  );
}
