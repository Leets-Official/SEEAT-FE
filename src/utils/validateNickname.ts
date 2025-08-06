export const validateNickname = (nickname: string): { valid: boolean; message?: string } => {
  const trimmed = nickname.trim();

  if (/\s/.test(trimmed)) {
    return { valid: false, message: '닉네임에 공백은 사용할 수 없어요.' };
  }

  if (trimmed.length > 8) {
    return { valid: false, message: '닉네임은 8자 이하로 입력해주세요.' };
  }
  if (!/^[가-힣a-zA-Z0-9]+$/.test(trimmed)) {
    return { valid: false, message: '닉네임에 특수문자는 사용할 수 없어요.' };
  }

  return { valid: true };
};
