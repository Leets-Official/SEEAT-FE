import type { ToggleTabProps } from './ToggleTab.types';

const ToggleTab = ({ options, selected, onSelect }: ToggleTabProps) => {
  const selectedIndex = options.findIndex((option) => option.value === selected);

  return (
    <div className="relative flex flex-col gap-5 bg-transparent w-full">
      <div className="relative flex w-full h-12 bg-[rgba(66,66,66,0.3)] rounded-[12px] px-1 py-1">
        {/* Slider */}
        <div
          className="absolute top-2 h-[calc(100%-16px)] w-[calc(50%-14px)] border-[1.5px] border-gray-500 rounded-[8px] transition-all duration-300 z-10"
          style={{
            left: `calc(${selectedIndex} * 50% + 7px)`,
          }}
        />

        {/* Buttons */}
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`flex-1 z-20 text-body-1 py-[10px] transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis ${
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
