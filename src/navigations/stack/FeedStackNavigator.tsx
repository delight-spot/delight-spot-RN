import {createStackNavigator} from '@react-navigation/stack';
import FeedHomeScreen from '../../screens/FeedHomeScreen';
import {colors, feedStackNavigation} from '../../constants';
import {SafeAreaView} from 'react-native';

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
