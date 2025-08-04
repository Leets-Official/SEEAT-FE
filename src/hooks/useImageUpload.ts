import { useState } from 'react';

export function useImgUpload(maxCount: number = 5) {
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const addImages = (files: FileList | null) => {
    if (!files) return;

    const selected = Array.from(files).slice(0, maxCount - images.length);
    const newPreviews = selected.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...selected]);
    setPreviewUrls((prev) => [...prev, ...newPreviews]);
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
