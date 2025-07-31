import type { ToggleTabProps } from './ToggleTab.types';

const ToggleTab = ({ options, selected, onSelect }: ToggleTabProps) => {
  const selectedIndex = options.findIndex((option) => option.value === selected);

  return (
    <div className="relative flex w-full flex-col gap-5 bg-transparent">
      <div className="relative flex h-12 w-full rounded-[12px] bg-[rgba(66,66,66,0.3)] px-1 py-1">
        {/* Slider */}
        <div
          className="absolute top-2 z-10 h-[calc(100%-16px)] w-[calc(50%-14px)] rounded-[8px] border-[1.5px] border-gray-500 transition-all duration-300"
          style={{
            left: `calc(${selectedIndex} * 50% + 7px)`,
          }}
        />

        {/* Buttons */}
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`text-body-1 z-20 flex-1 overflow-hidden py-[10px] text-ellipsis whitespace-nowrap transition-colors duration-200 ${
              option.value === selected ? 'text-[#E0E0E0]' : 'text-[#616161]'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToggleTab;
