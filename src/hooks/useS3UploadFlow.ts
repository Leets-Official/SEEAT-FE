import { getPresignedUrls, uploadToS3 } from '@/api/image/image.api';

export const useS3UploadFlow = async (
  files: File[],
): Promise<{ fileName: string; url: string }[]> => {
  if (files.length === 0) return [];

  const fileNames = files.map((file) => file.name);

  const response = await getPresignedUrls(fileNames);
  const presignedInfos = Array.isArray(response) ? response : [response];

  if (!presignedInfos || presignedInfos.length !== files.length) {
    throw new Error('Presigned URL을 일부 가져오지 못했습니다.');
  }

  const uploadResults = await Promise.all(
    files.map(async (file) => {
      const matched = presignedInfos.find((p) => p.fileName === file.name);
      if (!matched) throw new Error(`${file.name}에 대한 presigned URL이 없습니다.`);

      await uploadToS3(matched.preSignedUrl, file);

      return {
        fileName: file.name,
        url: matched.preSignedUrl,
      };
    }),
  );

  return uploadResults;
};

// import { usePresignedUrlMutation } from '@/hooks/mutations/usePresignedUrlMutation';
// import { useUploadToS3Mutation } from '@/hooks/mutations/useUploadToS3Mutation';

// export const useS3UploadFlow = () => {
//   const { mutateAsync: getUrls } = usePresignedUrlMutation();
//   const { mutateAsync: upload } = useUploadToS3Mutation();

//   const uploadImagesToS3 = async (files: File[]): Promise<{ fileName: string; url: string }[]> => {
//     if (files.length === 0) return [];

//     const fileNames = files.map((file) => file.name);

//     const presignedInfos = await getUrls({ fileNames });

//     if (!presignedInfos || presignedInfos.length !== files.length) {
//       throw new Error('Presigned URL을 일부 가져오지 못했습니다.');
//     }

//     // 파일명 기준으로 presignedUrl 매칭
//     const uploadResults = await Promise.all(
//       files.map(async (file) => {
//         const info = presignedInfos.find((p) => p.fileName === file.name);
//         if (!info) throw new Error(`${file.name}에 대한 presigned URL이 없습니다.`);

//         await upload({ url: info.preSignedUrl, file });

//         return {
//           fileName: info.fileName,
//           url: info.preSignedUrl.split('?')[0], // S3 public URL
//         };
//       }),
//     );

//     return uploadResults;
//   };

//   return { uploadImagesToS3 };
// };