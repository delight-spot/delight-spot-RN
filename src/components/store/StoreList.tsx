import {useGetInfiniteStores} from '@/hooks/queries/useGetStores';
import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from 'react';

import StoreItem from './StoreItem';

export default function StoreList() {
  const {
    data: stores,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetInfiniteStores();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRefreshing = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  return (
    <FlatList
      data={stores?.pages.flat()}
      renderItem={({item}) => <StoreItem store={item} />}
      keyExtractor={({pk}) => String(pk)}
      contentContainerStyle={styles.container}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      refreshing={isRefreshing}
      onRefresh={handleRefreshing}
      scrollIndicatorInsets={{right: 1}}
      indicatorStyle="black"
      ItemSeparatorComponent={() => (
        <View style={{width: '100%', height: 32}} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    paddingTop: 24,
  },
});
