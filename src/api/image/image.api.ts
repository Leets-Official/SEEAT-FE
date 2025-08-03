import api from '@/api/api';
import type { ApiResponse } from '@/types/api-response';

export const getPresignedUrls = async (fileNames: string[]) => {
  try {
    const response = await api.get<ApiResponse<string[]>>('/images/upload-url', {
      params: {
        file: fileNames,
      },
      paramsSerializer: {
        indexes: null,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Presigned URL 발급 실패:', error);
    throw error;
  }
};
