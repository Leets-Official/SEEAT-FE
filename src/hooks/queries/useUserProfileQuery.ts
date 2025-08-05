import { useQuery } from '@tanstack/react-query';
import api from '@/api/api';

export interface UserProfile {
  nickname: string;
  imageUrl: string | null;
  genres: string[];
  auditoriums: string[];
}

const fetchUserProfile = async (): Promise<UserProfile> => {
  const res = await api.get('/user/profile');
  return res.data.data;
};

export const useUserProfileQuery = () => {
  return useQuery<UserProfile>({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
    staleTime: 1000 * 60 * 5, // 5분 캐시
  });
};