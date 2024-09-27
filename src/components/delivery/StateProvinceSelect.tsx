import React from 'react';
import Chevron from '../../images/Chevron.svg';
import { useFormContext } from 'react-hook-form';

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
  const { register, setValue } = useFormContext();

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = e.target.value;
    onStateChange(selectedState);
    setValue('state', selectedState);
  };

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
        value={selectedState}
        {...register('state')}
        onChange={handleStateChange}
        className='text-sm font-normal block w-full p-3 pt-6 bg-white rounded-md border border-neutral-550 h-[52px] appearance-none text-neutral-450'
        style={{
          backgroundImage: `url(${Chevron})`,
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
