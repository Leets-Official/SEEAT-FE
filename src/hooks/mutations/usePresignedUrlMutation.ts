import { useMutation } from '@tanstack/react-query';
import { getPresignedUrls } from '@/api/image/image.api';
import type { ApiError } from '@/types/api-response';
import type { PresignedUrlInfo } from '@/types/image';

export const usePresignedUrlMutation = () => {
  return useMutation<PresignedUrlInfo[], ApiError, { fileNames: string[] }>({
    mutationFn: ({ fileNames }) => getPresignedUrls(fileNames),
  });
};