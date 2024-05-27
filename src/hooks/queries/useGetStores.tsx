import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import {Store} from '../../types/domain';
import {ErrorStatus} from '../../types/common';
import {getStores} from '../../services/feed/stores';
import {queryKeys} from '../../constants';

function useGetInfiniteStores(
  queryOptions?: UseInfiniteQueryOptions<
    Store[],
    ErrorStatus,
    InfiniteData<Store[], number>,
    Store[],
    QueryKey,
    number
  >,
) {
  return useInfiniteQuery({
    queryFn: ({pageParam}) => getStores(pageParam),
    queryKey: [queryKeys.GET_STORES],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastFeed = lastPage.at(-1);
      return lastFeed ? allPage.length + 1 : undefined;
    },
    ...queryOptions,
  });
}

export {useGetInfiniteStores};
