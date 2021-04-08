import { FC } from 'react';

import FilterIcon from '../../icons/filter.svg'
import CloseIcon from '../../icons/close.svg'

import './filter.css';

interface FilterProps {
  filter: string;
  setFilter: (value: string) => void;
}

export const Filter: FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div className='filter'>
      <img src={FilterIcon} className='filter-icon' />
      <input
        className='filter-input'
        type='text'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder='Filter by keyword'
      />
      <img src={CloseIcon} className='close-icon' onClick={() => setFilter('')}/>
    </div>
  );
};
