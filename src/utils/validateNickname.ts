export const validateNickname = (nickname: string): { valid: boolean; message?: string } => {
  if (/\s/.test(nickname)) {
    return { valid: false, message: '닉네임에 공백은 사용할 수 없어요.' };
  }

  if (nickname.length > 8) {
    return { valid: false, message: '닉네임은 8자 이하로 입력해주세요.' };
  }

  return { valid: true };
};
