import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {colors, feedStackNavigation} from '@/constants';
import FeedHomeScreen from '@/screens/FeedHomeScreen';

export type FeedStackParamList = {
  [feedStackNavigation.HOME]: undefined;
};

const Stacks = createStackNavigator<FeedStackParamList>();

export default function FeedStackNavigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stacks.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.WHITE,
          },
          headerShown: false,
        }}>
        <Stacks.Screen
          name={feedStackNavigation.HOME}
          component={FeedHomeScreen}
        />
      </Stacks.Navigator>
    </SafeAreaView>
  );
}
