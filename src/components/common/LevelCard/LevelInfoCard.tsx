import React from 'react';

interface LevelInfoCardProps {
  level: number;
  title: string;
  condition: string;
  Icon: React.ElementType;
}

export default function LevelInfoCard({ level, title, condition, Icon }: LevelInfoCardProps) {
  return (
    <div className="w-[335px] h-[120px] mx-auto flex justify-between items-start">
      <div className="w-[120px] h-[120px] bg-[#4242424D] rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-[100px] h-[100px]" />
      </div>
      <div className="w-[195px] flex flex-col pt-2">
        <p className="text-title-3 text-white">
          Lv.{level} {title}
        </p>
        <div className="flex pt-1 text-body-2">
          <span className="text-gray-500 shrink-0 mr-2">달성 조건</span>
          <div className="flex flex-col">
            {condition.split('\n').map((line, index) => (
              <span key={index} className="text-red-300">
                {line}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}