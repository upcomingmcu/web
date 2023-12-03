import { useQuery } from '@tanstack/react-query';
import { ProductionType } from '../api';

export default function useAllProductions() {
  const { isPending, error, data } = useQuery<ProductionType[]>({
    queryKey: ['allProductions'],
    queryFn: () =>
      fetch('https://api.umcu.app/productions').then((res) => res.json())
  });

  return { isPending, error, data };
}
