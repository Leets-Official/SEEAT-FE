import { useMutation } from '@tanstack/react-query';
import { getPresignedUrls } from '@/api/image/image.api';
import type { ApiError } from '@/types/api-response';

export const usePresignedUrlMutation = () => {
  return useMutation<string[], ApiError, { fileNames: string[] }>({
    mutationFn: ({ fileNames }) => getPresignedUrls(fileNames),
  });
};
