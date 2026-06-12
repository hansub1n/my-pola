'use server';

import { getCurrentUserData } from '@/utils/supabase/auth';

export const getMyPolaDataOnServer = async () => {
  const { id, nickname, mileage, point, level } = await getCurrentUserData();
  return { id, nickname, mileage, point, level };
};
