import { useMutation } from '@tanstack/react-query';
import { uploadToS3 } from '@/api/image/image.api';
import type { ApiError } from '@/types/api-response';

interface UploadParams {
  url: string;
  file: File;
}

export const useUploadToS3Mutation = () => {
  return useMutation<void, ApiError, UploadParams>({
    mutationFn: ({ url, file }) => uploadToS3(url, file),
  });
};