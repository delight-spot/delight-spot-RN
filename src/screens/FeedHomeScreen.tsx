import {SafeAreaView, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FeedHomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Ionicons name="arrow-back" size={25} />
      </View>
      <Text>FeedHome</Text>
    </SafeAreaView>
  );
}
