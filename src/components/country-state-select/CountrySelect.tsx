import React from 'react';
import Chevron from '../../images/Chevron.svg';
import { useFormContext } from 'react-hook-form';

interface CountrySelectProps {
  countries: { [key: string]: string[] };
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  className?: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  countries,
  selectedCountry,
  onCountryChange,
  className,
}) => {
  const { register, setValue } = useFormContext();

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    onCountryChange(selectedCountry);
    setValue('country', selectedCountry);
  };

  return (
    <div className={`relative ${className}`}>
      <label
        htmlFor='country'
        className={`mt-2 absolute left-3 text-xs font-normal text-neutral-850`}
      >
        Country
      </label>
      <select
        id='country'
        value={selectedCountry}
        {...register('country')}
        onChange={handleCountryChange}
        className='text-sm font-normal block w-full p-3 pt-6 bg-white rounded-md border border-neutral-550 h-[52px] appearance-none pr-10 text-neutral-450'
        style={{
          backgroundImage: `url(${Chevron})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          backgroundSize: '1rem 1rem',
        }}
      >
        <option value='' disabled hidden>
          Select a country
        </option>
        {Object.keys(countries).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
