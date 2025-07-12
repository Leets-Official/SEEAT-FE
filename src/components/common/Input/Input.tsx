import { useState } from "react";
import clsx from "clsx";

interface InputProps {
  label: string;
  active?: boolean;
  focus?: boolean;
  placeholder?: string;
  helperText?: string;
}

export default function InputField({
  label,
  active = false,
  focus = false,
  placeholder = "메시지를 입력하세요",
  helperText = "메시지에 마침표를 입력해요.",
}: InputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(focus);

  return (
    <div className="flex flex-col gap-2 p-4 border border-dashed rounded-xl border-violet-400 bg-gray-900">
      <label className="text-caption-2 text-white">{label}</label>
      <div
        className={clsx(
          "flex items-center rounded-lg px-3 py-2 bg-black transition-colors",
          active ? "border border-violet-400" : "border border-gray-800",
          isFocused ? "outline outline-1 outline-violet-400" : ""
        )}
      >
        <input
          type="text"
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-body-1 text-white placeholder-gray-400 focus:outline-none"
        />
        <button className="ml-2 text-white text-title-3">＋</button>
      </div>
      <p className="text-caption-2 text-yellow-400">{helperText}</p>
    </div>
  );
}
