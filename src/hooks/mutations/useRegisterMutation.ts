import { useMutation } from '@tanstack/react-query';
import { postRegister } from '@/api/user/register.api';
import type { RegisterPayload } from '@/api/user/register.api';

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: ({ data, tempUserKey }: { data: RegisterPayload; tempUserKey: string }) =>
      postRegister(data, tempUserKey),
  });
};
