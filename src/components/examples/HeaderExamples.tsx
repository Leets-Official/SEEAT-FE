import { Header } from '@/components';

export default function HeaderTest() {
  return (
    <div className="flex min-h-screen flex-col gap-12 p-4">
      <h1 className="text-title-2 mb-4 text-white">Header 예제</h1>

      {/* Header Section - BACK + 타이틀 + DETAIL */}
      <div className="rounded-m border border-gray-800 p-4">
        <p className="text-caption-1 mb-2 text-gray-400">
          Header (뒤로가기 + 타이틀 + Detail 버튼들)
        </p>
        <Header leftSection="BACK" rightSection="DETAIL" onDetailClick={() => alert('케밥 클릭')}>
          타이틀
        </Header>
      </div>

      {/* Header Section - LOGO + 타이틀 + SETTING */}
      <div className="rounded-m border border-gray-800 p-4">
        <p className="text-caption-1 mb-2 text-gray-400">Header (로고 + 타이틀 + 설정)</p>
        <Header
          leftSection="LOGO"
          rightSection="SETTING"
          onSettingsClick={() => alert(' 설정 클릭')}
        >
          타이틀
        </Header>
      </div>

      {/* Header Section - BACK + 타이틀 + KEBAB */}
      <div className="rounded-m border border-gray-800 p-4">
        <p className="text-caption-1 mb-2 text-gray-400">
          Header (뒤로가기 + 타이틀 + 케밥 버튼만)
        </p>
        <Header leftSection="BACK" rightSection="KEBAB" onKebabClick={() => alert('케밥 클릭')}>
          타이틀
        </Header>
      </div>
    </div>
  );
}
