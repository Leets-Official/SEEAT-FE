import React from 'react';
import type{ ToggleTabProps } from './ToggleTab.types';
import { Wrapper, TabGroup, TabButton, Slider } from './ToggleTab.styled';

const ToggleTab = ({ options, selected, onSelect }: ToggleTabProps) => {
  const selectedIndex = options.findIndex((option) => option === selected);

  return (
    <Wrapper>
      <TabGroup>
        <Slider index={selectedIndex} />
        {options.map((option) => (
          <TabButton
            key={option}
            selected={option === selected}
            onClick={() => onSelect(option)}
          >
            {option}
          </TabButton>
        ))}
      </TabGroup>
    </Wrapper>
  );
};

export default ToggleTab;
