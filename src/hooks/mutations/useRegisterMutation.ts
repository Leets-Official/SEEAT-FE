import { useMutation } from '@tanstack/react-query';
import { postRegister } from '@/api/user/register.api';
import type { RegisterPayload } from '@/api/user/register.api';
import type { ApiError, ApiResponse } from '@/types/api-response';

export const useRegisterMutation = () => {
  return useMutation<ApiResponse<null>, ApiError, { data: RegisterPayload; tempUserKey: string }>({
    mutationFn: ({ data, tempUserKey }) => postRegister(data, tempUserKey),
  });
};
