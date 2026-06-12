'use client';

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { getMypolaDataOnClient } from '@/services/mypola/getMypolaDataOnClient';

export const useGetMypola = (userId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.mypola(userId),
    queryFn: () => getMypolaDataOnClient(userId),
    enabled: !!userId,
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
  });
};
