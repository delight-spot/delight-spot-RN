import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStackNavigator from '../stack/FeedStackNavigator';
import {feedTabNavigation} from '../../constants';

export type FeedTabParamList = {
  [feedTabNavigation.HOME]: undefined;
};

const Tabs = createBottomTabNavigator<FeedTabParamList>();

export default function MainTabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name={feedTabNavigation.HOME}
        component={FeedStackNavigator}
      />
    </Tabs.Navigator>
  );
}
