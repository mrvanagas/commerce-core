import React from 'react';
import Chevron from '../../images/Chevron.svg'

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
        name='country'
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        className='text-sm font-normal block w-full p-3 pt-6 bg-white rounded-md border border-neutral-550 h-[52px] appearance-none pr-10 text-neutral-450'
        style={{
          backgroundImage:
            `url(${Chevron})`,
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
