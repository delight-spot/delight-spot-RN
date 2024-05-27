import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStackNavigator from '../stack/FeedStackNavigator';
import {colors, feedTabNavigation} from '../../constants';
import FeedBookingStore from '../../screens/FeedBookingScreen';
import MyPageScreen from '../../screens/MyPageScreen';
import {RouteProp} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type FeedTabParamList = {
  [feedTabNavigation.HOME]: undefined;
  [feedTabNavigation.BOOKINGS]: undefined;
  [feedTabNavigation.MY_PAGE]: undefined;
};

const Tabs = createBottomTabNavigator<FeedTabParamList>();

function TabBarIcons(route: RouteProp<FeedTabParamList>, focused: Boolean) {
  let iconName = '';
  switch (route.name) {
    case feedTabNavigation.HOME: {
      iconName = focused ? 'grid' : 'grid-outline';
      break;
    }
    case feedTabNavigation.BOOKINGS: {
      iconName = focused ? 'heart-sharp' : 'heart-outline';
      break;
    }
    case feedTabNavigation.MY_PAGE: {
      iconName = focused ? 'person' : 'person-outline';
      break;
    }
  }

  return (
    <Ionicons
      name={iconName}
      size={24}
      color={focused ? colors.AMBER_700 : colors.AMBER_500}
    />
  );
}

export default function MainTabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        tabBarIcon: ({focused}) => TabBarIcons(route, focused),
        headerTitleStyle: {
          color: colors.AMBER_600,
        },
      })}>
      <Tabs.Screen
        name={feedTabNavigation.HOME}
        component={FeedStackNavigator}
        options={{
          headerTitle: 'Delight Spots',
        }}
      />
      <Tabs.Screen
        name={feedTabNavigation.BOOKINGS}
        component={FeedBookingStore}
        options={{
          headerTitle: '찜',
        }}
      />
      <Tabs.Screen
        name={feedTabNavigation.MY_PAGE}
        component={MyPageScreen}
        options={{
          headerTitle: 'MY 장소',
        }}
      />
    </Tabs.Navigator>
  );
}
