import { useNavigate } from 'react-router-dom';
import {KakaoIcon} from '@/assets';
import { ConfirmModal, Header } from '@/components';
import { useModalStore } from '@/store/modalStore';
import { useToastStore } from '@/store';
import { postLogout, deleteUser } from '@/api/logout/logout.api';
import { useUserProfileQuery } from '@/hooks/queries/useUserProfileQuery'; 

export default function MySettingPage() {
  const appVersion = '1.0.0';
  const { openModal, modalType, closeModal } = useModalStore();
  const { show: showToast } = useToastStore();
  const navigate = useNavigate();

  const { data: user, isLoading } = useUserProfileQuery();

  const handleLogoutConfirm = async () => {
    try {
      await postLogout();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      showToast('로그아웃 되었습니다.', 3000);
      setTimeout(() => navigate('/login', { replace: true }), 100);
    } catch (error) {
      console.error('로그아웃 실패:', error);
      showToast('로그아웃에 실패했습니다.', 3000);
    } finally {
      closeModal();
    }
  };

  const handleWithdrawalConfirm = async () => {
    try {
      await deleteUser();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      showToast('회원탈퇴가 완료되었습니다.');
      setTimeout(() => navigate('/login', { replace: true }), 100);
    } catch (error) {
      console.error('회원탈퇴 실패:', error);
      showToast('회원탈퇴에 실패했습니다.');
    } finally {
      closeModal();
    }
  };

  const handleOpenLogoutModal = () => openModal('logoutConfirm');
  const handleOpenWithdrawalModal = () => openModal('withdrawalConfirm');

  return (
    <div className="min-h-screen">
      <Header leftSection="BACK">설정</Header>
      <main className="mx-auto flex flex-col divide-y divide-gray-800 px-6 pt-[50px]">
        <div className="flex h-[56px] w-full items-center justify-between">
          <span className="text-title-3 text-white">계정</span>
          <div className="flex items-center gap-x-2 text-gray-400">
            <KakaoIcon className="h-5 w-5" />
            <span className="text-body-1">
              {isLoading ? '로딩 중...' : user?.email || '이메일 없음'}
            </span>
          </div>
        </div>

        <div className="flex h-[56px] w-full items-center justify-between">
          <span className="text-title-3 text-white">버전 정보</span>
          <span className="text-body-1 text-gray-400">{appVersion}</span>
        </div>

        <button
          onClick={handleOpenLogoutModal}
          className="text-title-3 flex h-[56px] w-full items-center text-left text-white"
        >
          로그아웃
        </button>

        <button
          onClick={handleOpenWithdrawalModal}
          className="text-title-3 flex h-[56px] w-full items-center text-left text-red-400"
        >
          회원탈퇴
        </button>
      </main>

      {modalType === 'logoutConfirm' && (
        <ConfirmModal
          title="로그아웃하시겠어요?"
          confirmText="취소"
          cancelText="로그아웃하기"
          reverseButton
          onCancel={handleLogoutConfirm}
          onConfirm={closeModal}
        />
      )}

      {modalType === 'withdrawalConfirm' && (
        <ConfirmModal
          title="탈퇴하시겠어요?"
          subWarningText="탈퇴하면 7일 후 다시 가입할 수 있어요."
          cancelText="탈퇴하기"
          confirmText="취소"
          reverseButton
          onCancel={handleWithdrawalConfirm}
          onConfirm={closeModal}
        />
      )}
    </div>
  );
}
