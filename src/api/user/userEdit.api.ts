import api from '@/api/api';
import type { UpdateUserProfileRequest, UserProfileResponse } from '@/types/userEdit';

export const updateUserProfile = async (
  data: UpdateUserProfileRequest
): Promise<UserProfileResponse> => {
  const res = await api.put('/api/v1/profile', data);
  return res.data.data;
};