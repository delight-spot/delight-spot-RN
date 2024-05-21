import {QueryClientProvider} from '@tanstack/react-query';
import RootNavigator from './src/navigations/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {queryClient} from './src/services/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
