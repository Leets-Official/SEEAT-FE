import { useQuery } from '@tanstack/react-query';
import api from '@/api/api';

interface UserProfile {
  email: string;
  nickname: string;
  imageUrl: string | null;
}

const fetchUserProfile = async (): Promise<UserProfile> => {
  const res = await api.get('/api/v1/profile');
  return res.data.data;
};

export const useUserProfileQuery = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
    staleTime: 1000 * 60 * 5, // 5분 캐시
  });
};