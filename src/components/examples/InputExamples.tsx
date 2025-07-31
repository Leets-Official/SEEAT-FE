import { useState } from "react";
import InputField from "../common/Input/Input";

export default function InputExamples() {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [v3, setV3] = useState("");
  const [v4, setV4] = useState("");

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <h1 className="text-white text-title-2 mb-6">InputField 상태 예시</h1>

      {/* 1번: focus false, gray placeholder */}
      <InputField
        label="주제"
        value={v1}
        onChange={setV1}
        placeholder="메세지를 입력해요"
        placeholderColorType="gray"
      />

      {/* 2번: focus true, gray placeholder */}
      <div className="mt-8">
        <InputField
          label="주제"
          value={v2}
          onChange={setV2}
          showBackground
          placeholder="메세지를 입력해요"
          placeholderColorType="gray"
        />
      </div>

      {/* 3번: focus true, white placeholder */}
      <div className="mt-8">
        <InputField
          label="주제"
          value={v3}
          onChange={setV3}
          showBackground
          placeholder="메세지를 입력해요"
          placeholderColorType="white"
        />
      </div>

      {/* 4번: focus false, white placeholder */}
      <div className="mt-8">
        <InputField
          label="주제"
          value={v4}
          onChange={setV4}
          placeholder="메세지를 입력해요"
          placeholderColorType="white"
        />
      </div>
    </div>
  );
}


