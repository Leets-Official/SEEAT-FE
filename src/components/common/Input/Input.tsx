import { useState } from "react";
import { PlusIcon } from "@/assets";
import { cn } from "@/utils/cn";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  helperSubText?: string;
  showBackground?: boolean;
  placeholderColorType?: "gray" | "white";
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder = "메시지를 입력하세요",
  helperText,
  helperSubText,
  showBackground = false,
  placeholderColorType = "gray",
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showDotWarning, setShowDotWarning] = useState(false);

  const handleCheck = () => {
    if (!value.includes(".")) {
      setShowDotWarning(true);
    } else {
      setShowDotWarning(false);
    }
  };

  const placeholderColorClass =
    placeholderColorType === "white" ? "placeholder-white" : "placeholder-gray-400";

  return (
    <div className="flex flex-col gap-1 w-[335px]">
      <label className="text-caption-2 text-gray-300 h-[20px]">
        {label} <span className="text-red-500">*</span>
      </label>

      <div
        className={cn(
          "flex items-center px-3 border rounded-lg h-[48px] w-[335px]",
          isFocused ? "border-gray-400 bg-gray-800" : "border-gray-800 bg-black",
          showBackground && "bg-gray-800/30"
        )}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "flex-1 bg-transparent text-body-2 text-white",
            placeholderColorClass,
            "focus:outline-none focus:ring-0"
          )}
        />
        <button
          type="button"
          onClick={handleCheck}
          className="ml-2 text-white focus:outline-none"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>

      {(helperText || helperSubText || showDotWarning) && (
        <div className="flex flex-col gap-0.5 mt-1">
          {helperText && (
            <p className="text-caption-2 text-gray-400 h-[20px] w-[335px]">{helperText}</p>
          )}
          {helperSubText && (
            <p className="text-caption-3 text-yellow-warn h-[20px] w-[335px]">
              {helperSubText}
            </p>
          )}
          {showDotWarning && (
            <p className="text-caption-3 text-yellow-warn h-[20px] w-[335px]">
              메시지에 마침표를 입력해요.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
