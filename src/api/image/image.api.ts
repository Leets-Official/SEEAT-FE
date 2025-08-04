import axios from 'axios';
import api from '@/api/api';
import type { ApiResponse } from '@/types/api-response';

/**
 * presigned URL 발급
 * @param fileNames 업로드할 파일 이름 배열
 * @returns presigned URL 문자열 배열
 */
const getPresignedUrls = async (fileNames: string[]): Promise<string[]> => {
  const res = await api.get<ApiResponse<string[]>>('/images/upload-url', {
    params: { file: fileNames },
    paramsSerializer: { indexes: null },
  });

  const urls = res.data.data;

  if (!urls || urls.length === 0) {
    throw new Error('Presigned URL 발급에 실패했습니다.');
  }

  return urls;
};

/**
 * S3에 파일 업로드
 * @param url presigned URL
 * @param file 업로드할 File 객체
 */
const uploadToS3 = async (url: string, file: File): Promise<void> => {
  await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
};

export default { getPresignedUrls, uploadToS3 };
