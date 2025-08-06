import api from '@/api/api';
import type { ApiResponse } from '@/types/api-response';
import type { UpdateUserProfileRequest, UserProfileResponse } from '@/types/userEdit';

export const updateUserProfile = async (
  data: UpdateUserProfileRequest
): Promise<UserProfileResponse> => {
  const response = await api.patch<ApiResponse<UserProfileResponse>>('/profile', data);
  return response.data.data;
};