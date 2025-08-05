import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '@/api/profile/profile.api';
import type { UserProfile } from '@/types/user';

export const useUserProfileQuery = () => {
  return useQuery<UserProfile>({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5, // 5분 캐시
  });
};