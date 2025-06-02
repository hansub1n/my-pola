'use client';

import { getClientUserDataByUserId } from '@/utils/supabase/authClient';

export const getMypolaDataOnClient = async (userId: string) => {
  const { id, nickname, mileage, point, level } = await getClientUserDataByUserId(userId);
  return { id, nickname, mileage, point, level };
};
