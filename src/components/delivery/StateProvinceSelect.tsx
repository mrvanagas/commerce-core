import React from 'react';
import Chevron from '../../images/Chevron.svg'

interface StateSelectProps {
  states: string[];
  selectedState: string;
  onStateChange: (state: string) => void;
  className?: string;
}

const StateSelect: React.FC<StateSelectProps> = ({
  states,
  selectedState,
  onStateChange,
  className,
}) => {
  return (
    <div className={`${className} relative`}>
      <label
        htmlFor='state'
        className={`mt-2 absolute left-3 text-xs font-normal text-neutral-850`}
      >
        State / Province
      </label>
      <select
        id='state'
        name='state'
        value={selectedState}
        onChange={(e) => onStateChange(e.target.value)}
        className='text-sm font-normal block w-full p-3 pt-6 bg-white rounded-md border border-neutral-550 h-[52px] appearance-none text-neutral-450'
        style={{
          backgroundImage:
            `url(${Chevron})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          backgroundSize: '1rem 1rem',
        }}
      >
        <option value='' disabled hidden>
          --
        </option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateSelect;
