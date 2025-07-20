import { useState } from 'react';

export function useImgUpload(maxCount: number = 5) {
  const [images, setImages] = useState<File[]>([]);

  const addImages = (files: FileList | null) => {
    if (!files) return;
    const selected = Array.from(files).slice(0, maxCount - images.length);
    setImages((prev) => [...prev, ...selected]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const resetImages = () => {
    setImages([]);
  };

  const isMax = images.length >= maxCount;

  return {
    images,
    addImages,
    removeImage,
    resetImages,
    isMax,
  };
}
