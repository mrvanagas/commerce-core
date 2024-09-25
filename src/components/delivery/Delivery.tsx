import { useEffect, useState } from 'react';
import Input from '../../shared/input/Input';
import CountrySelect from './CountrySelect';
import StateSelect from './StateProvinceSelect';
import countryStateData from '../../utils/countries';

const Delivery: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    if (selectedCountry && countryStateData[selectedCountry]) {
      setStates(countryStateData[selectedCountry]);
      setSelectedState('');
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state);
  };

  return (
    <div className='bg-white border-y lg:border-y-0 border-neutral-550 p-4 mb-4 text-neutral-450'>
      <h2 className='text-2xl font-bold mb-4'>Delivery</h2>
      <div className='flex justify-normal gap-2 mb-4'>
        <Input placeholder={'First Name'} />
        <Input placeholder={'Last Name'} />
      </div>
      <Input placeholder={'Address'} className='mb-4' />
      <div className='flex flex-col lg:flex-row lg:justify-evenly gap-2 mb-4'>
        <Input placeholder={'City'} className='flex-1 mb-2' />
        <div className='flex gap-2'>
          <div className='flex-1'>
            <StateSelect
              states={states}
              selectedState={selectedState}
              onStateChange={handleStateChange}
              className=''
            />
          </div>
          <div className='flex-1'>
            <Input placeholder={'ZIP/ Postal Code'} className='' />
          </div>
        </div>
      </div>

      <CountrySelect
        countries={countryStateData}
        selectedCountry={selectedCountry}
        onCountryChange={handleCountryChange}
      />
    </div>
  );
};

export default Delivery;
