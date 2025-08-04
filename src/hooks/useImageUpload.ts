import { useState } from 'react';

export function useImgUpload(maxCount: number = 5) {
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const addImages = (files: FileList | null) => {
    if (!files) return;
    const selected = Array.from(files).slice(0, maxCount);

    // 기존 이미지가 1장 제한일 경우 덮어쓰기
    if (maxCount === 1) {
      // 기존 preview 해제
      previewUrls.forEach((url) => URL.revokeObjectURL(url));

      const newPreviewUrls = selected.map((file) => URL.createObjectURL(file));
      setImages(selected);
      setPreviewUrls(newPreviewUrls);
    } else {
      const selectableCount = maxCount - images.length;
      const sliced = selected.slice(0, selectableCount);
      const newPreviewUrls = sliced.map((file) => URL.createObjectURL(file));

      setImages((prev) => [...prev, ...sliced]);
      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    // 미리보기 URL 해제
    URL.revokeObjectURL(previewUrls[index]);

    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const resetImages = () => {
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setImages([]);
    setPreviewUrls([]);
  };

  const isMax = images.length >= maxCount;

  return {
    images, // File[]
    previewUrls, // string[]
    addImages,
    removeImage,
    resetImages,
    isMax,
  };
}
