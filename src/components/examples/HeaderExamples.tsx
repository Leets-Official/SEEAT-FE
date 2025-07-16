import Header from "@/components/common/Header/Header";
import HomeHeader from "@/components/common/Header/HomeHeader";

export default function HeaderTest() {
  return (
    <div className="min-h-screen bg-gray-950 p-4 flex flex-col gap-12">
      <h1 className="text-title-2 text-white mb-4">Header & HomeHeader 테스트</h1>

      {/* HomeHeader Section */}
      <div className="border border-gray-800 rounded-md p-4">
        <p className="text-caption-1 text-gray-400 mb-2">HomeHeader (메인 화면용)</p>
        <HomeHeader onSettingsClick={() => alert("⚙️ 설정 클릭")} />
      </div>

      {/* Header Section */}
      <div className="border border-gray-800 rounded-md p-4">
        <p className="text-caption-1 text-gray-400 mb-2">Header (뒤로가기 + 타이틀 + 하트/북마크)</p>
        <Header
          title="타이틀"
          onBackClick={() => alert("🔙 뒤로가기 클릭")}
        />
      </div>
    </div>
  );
}
