import {useGetInfiniteStores} from '@/hooks/queries/useGetStores';

export default function StoreList() {
  const {data} = useGetInfiniteStores();

  return <></>;
}
