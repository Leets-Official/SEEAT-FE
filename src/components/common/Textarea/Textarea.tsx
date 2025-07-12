// components/TextAreaField.tsx
import { useState } from "react";
import clsx from "clsx";

interface TextAreaProps {
  label: string;
  active?: boolean;
  focus?: boolean;
  placeholder?: string;
  helperText?: string;
  maxLength?: number;
}

export default function TextAreaField({
  label,
  active = false,
  focus = false,
  placeholder = "메시지를 입력하세요",
  helperText = "내용을 입력해주세요",
  maxLength = 1000,
}: TextAreaProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(focus);

  return (
    <div className="flex flex-col gap-2 p-4 border border-dashed rounded-xl border-violet-400 bg-gray-900">
      <label className="text-caption-2 text-white">{label}</label>
      <textarea
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        className={clsx(
          "h-24 resize-none rounded-lg px-3 py-2 bg-black text-body-1 text-white placeholder-gray-400 transition-colors",
          active ? "border border-violet-400" : "border border-gray-800",
          isFocused ? "outline outline-1 outline-violet-400" : ""
        )}
      />
      <p className="text-caption-3 text-gray-400 text-right">{value.length}/{maxLength}</p>
      <p className="text-caption-2 text-red-300">○○자 이상 입력해주세요</p>
      <p className="text-caption-2 text-yellow-400">{helperText}</p>
    </div>
  );
}
