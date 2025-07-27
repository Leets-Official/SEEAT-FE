import { Fragment, useState } from 'react';
import { cn } from '@/utils/cn';
import HeaderBasic from '@/components/common/Header/HeaderBasic';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react';
import ChevronUpIcon from '@/assets/icons/chevron-up.svg?react';
import CheckSquareOnIcon from '@/assets/icons/check-square-on.svg?react';
import CheckSquareOffIcon from '@/assets/icons/check-square-off.svg?react';
import { useFilter } from '@/contexts/FilterContext';

const sortOptions = ['가장 인기있는 순', '평점순', '최신순'];
const cinemaOptions = {
  IMAX: ['용산아이파크몰', '왕심리', '천호'],
  'Dolby Cinema': [
    '코에스점', '남양주현대아울렌스페이스원', '하른스타필드점', '안성스타필드점',
    '수원AK플라자점', '송도점', '대전신세계 아트애드사인스점', '대구신세계점',
  ],
};
const soundOptions = ['Dolby Atmos', 'DTS:X'];
const environmentOptions = ['리클라이너', '카포트'];

const AccordionSection = ({ title, isOpen, onToggle, children }: { title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }) => (
  <div className="py-2">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between"
    >
      <span className="text-title-4 text-gray-300">{title}</span>
      {isOpen ? <ChevronUpIcon className="h-5 w-5 text-gray-300" /> : <ChevronDownIcon className="h-5 w-5 text-gray-300" />}
    </button>
    <div
      className={cn(
        'overflow-hidden transition-[max-height] duration-300 ease-in-out',
        isOpen ? 'max-h-screen' : 'max-h-0'
      )}
    >
      <div className="pt-4">{children}</div>
    </div>
  </div>
);

const FilterCheckbox = ({ option, isSelected, onToggle }: { option: string; isSelected: boolean; onToggle: () => void; }) => (
  <label className="flex cursor-pointer items-center gap-x-2">
    <input type="checkbox" checked={isSelected} onChange={onToggle} className="sr-only" />
    {isSelected ? (
      <CheckSquareOnIcon className="h-6 w-6 text-red-400" />
    ) : (
      <CheckSquareOffIcon className="h-6 w-6 text-gray-700" />
    )}
    <span className="text-body-1 text-gray-500">{option}</span>
  </label>
);

export default function ReviewFilter() {
  const [activeSort, setActiveSort] = useState('인기순');
  const [openSections, setOpenSections] = useState<string[]>([ 'Dolby Cinema', '음향', '관람 환경' ]);
  const [selectedCinemas, setSelectedCinemas] = useState<Record<string, boolean>>({});
  const [selectedSounds, setSelectedSounds] = useState<Record<string, boolean>>({});
  const [selectedEnvironments, setSelectedEnvironments] = useState<Record<string, boolean>>({});

  const { setIsFiltered } = useFilter();

  const toggleSection = (sectionName: string) => {
    setOpenSections(prev =>
      prev.includes(sectionName)
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const handleCheckboxChange = (
    setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
    option: string
  ) => {
    setter(prev => {
      const updated = { ...prev, [option]: !prev[option] };
      setIsFiltered(true);
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-[400px] px-4">
        <HeaderBasic>
          <h1 className="text-lg font-semibold">필터</h1>
        </HeaderBasic>

        {/* 정렬 */}
        <section className="py-4">
          <h2 className="mb-3 text-title-3">정렬</h2>
          <div className="flex w-full items-center">
            {sortOptions.map((option, index) => (
              <Fragment key={option}>
                <button
                  onClick={() => setActiveSort(option)}
                  className={cn(
                    'flex-1 text-center text-title-4',
                    activeSort === option ? 'font-bold text-red-400' : 'text-gray-300'
                  )}
                >
                  {option}
                </button>
                {index < sortOptions.length - 1 && <div className="h-4 w-px bg-gray-700" />}
              </Fragment>
            ))}
          </div>
        </section>

        {/* 영화관 */}
        <div className="py-4">
          <h2 className="mb-2 text-title-3">영화관</h2>
          <div className="flex flex-col pl-4">
            {Object.entries(cinemaOptions).map(([cinema, branches]) => (
              <AccordionSection
                key={cinema}
                title={cinema}
                isOpen={openSections.includes(cinema)}
                onToggle={() => toggleSection(cinema)}
              >
                <div className="flex flex-col gap-y-3 pl-2">
                  {branches.map(branch => (
                    <FilterCheckbox
                      key={branch}
                      option={branch}
                      isSelected={!!selectedCinemas[branch]}
                      onToggle={() => handleCheckboxChange(setSelectedCinemas, branch)}
                    />
                  ))}
                </div>
              </AccordionSection>
            ))}
          </div>
        </div>

        {/* 음향 */}
        <div className="py-4">
          <AccordionSection
            title="음향"
            isOpen={openSections.includes('음향')}
            onToggle={() => toggleSection('음향')}
          >
            <div className="flex flex-col gap-y-3 pl-4 pt-4">
              {soundOptions.map(option => (
                <FilterCheckbox
                  key={option}
                  option={option}
                  isSelected={!!selectedSounds[option]}
                  onToggle={() => handleCheckboxChange(setSelectedSounds, option)}
                />
              ))}
            </div>
          </AccordionSection>
        </div>

        {/* 관람 환경 */}
        <div className="py-4">
          <AccordionSection
            title="관람 환경"
            isOpen={openSections.includes('관람 환경')}
            onToggle={() => toggleSection('관람 환경')}
          >
            <div className="flex flex-col gap-y-3 pl-4 pt-4">
              {environmentOptions.map(option => (
                <FilterCheckbox
                  key={option}
                  option={option}
                  isSelected={!!selectedEnvironments[option]}
                  onToggle={() => handleCheckboxChange(setSelectedEnvironments, option)}
                />
              ))}
            </div>
          </AccordionSection>
        </div>
      </div>
    </div>
  );
}
