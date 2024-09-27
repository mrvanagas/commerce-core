/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import countryStateData from '../../utils/countries';
import InputField from '../../shared/input/Input';
import Button from '../../shared/button/Button';
import CountrySelect from '../delivery/CountrySelect';
import StateSelect from '../delivery/StateProvinceSelect';
import Visa from '../../images/visa.png';
import Mastercard from '../../images/mastercard.png';
import DinersClub from '../../images/diners-club.png';
import Amex from '../../images/Amex.png';
import Discover from '../../images/discover.png';
import Lock from '../../images/lock.png';
import { useFormContext } from 'react-hook-form';
import formatCardNumber from '../../utils/formatCardNumber';

const DeliveryInformation: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext();

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
    setValue('country', country);
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setValue('state', state);
  };

  const onSubmit = (data: any) => {
    console.log('Form Submitted:', data);
  };

  const onError = (errors: any) => {
    console.log('Validation errors:', errors);
  };

  const selectedMethod = watch('paymentMethod');

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* Contact Section */}
      <div className='bg-white border-y lg:border-y-0 border-neutral-550 p-4 my-4'>
        <h2 className='text-2xl font-bold mb-4 text-neutral-450'>Contact</h2>
        <InputField
          label='Email Address'
          placeholder='Email Address'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email?.message && (
          <p className='text-red-500'>{errors.email.message as string}</p>
        )}
      </div>

      {/* Delivery Section */}
      <div className='bg-white border-y lg:border-y-0 border-neutral-550 p-4 mb-4 text-neutral-450'>
        <h2 className='text-2xl font-bold mb-4'>Delivery</h2>
        <div className='flex gap-2 mb-4 justify-evenly'>
          <div className='flex-1'>
            <InputField
              placeholder='First Name'
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName?.message && (
              <p className='text-red-500'>
                {errors.firstName.message as string}
              </p>
            )}
          </div>
          <div className='flex-1'>
            <InputField
              placeholder='Last Name'
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName?.message && (
              <p className='text-red-500'>
                {errors.lastName.message as string}
              </p>
            )}
          </div>
        </div>

        <InputField
          placeholder='Address'
          className='mb-4'
          {...register('address', { required: 'Address is required' })}
        />
        {errors.address?.message && (
          <p className='text-red-500'>{errors.address.message as string}</p>
        )}

        <div className='block lg:hidden mb-4'>
          <div className='flex flex-col gap-2'>
            <div className='flex-1'>
              <InputField
                placeholder='City'
                className='w-full'
                {...register('city', { required: 'City is required' })}
              />
              {errors.city?.message && (
                <p className='text-red-500'>{errors.city.message as string}</p>
              )}
            </div>
            <div className='flex flex-row gap-2'>
              <div className='flex-1'>
                <StateSelect
                  states={states}
                  selectedState={selectedState}
                  onStateChange={handleStateChange}
                  className='w-full'
                />
              </div>
              <div className='flex-1'>
                <InputField
                  placeholder='ZIP/ Postal Code'
                  className='w-full'
                  {...register('postalCode', {
                    required: 'ZIP/Postal Code is required',
                    pattern: {
                      value: /^\d{5}(-\d{4})?$/,
                      message: 'Invalid ZIP/Postal Code',
                    },
                  })}
                />
                {errors.postalCode?.message && (
                  <p className='text-red-500'>
                    {errors.postalCode.message as string}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className='hidden lg:block mb-4'>
          <div className='flex flex-row lg:justify-evenly gap-2'>
            <div className='flex-1'>
              <InputField
                placeholder='City'
                className='w-full'
                {...register('city', { required: 'City is required' })}
              />
              {errors.city?.message && (
                <p className='text-red-500'>{errors.city.message as string}</p>
              )}
            </div>
            <div className='flex-1'>
              <StateSelect
                states={states}
                selectedState={selectedState}
                onStateChange={handleStateChange}
                className='w-full'
              />
            </div>
            <div className='flex-1'>
              <InputField
                placeholder='ZIP/ Postal Code'
                className='w-full'
                {...register('postalCode', {
                  required: 'ZIP/Postal Code is required',
                  pattern: {
                    value: /^\d{5}(-\d{4})?$/,
                    message: 'Invalid ZIP/Postal Code',
                  },
                })}
              />
              {errors.postalCode?.message && (
                <p className='text-red-500'>
                  {errors.postalCode.message as string}
                </p>
              )}
            </div>
          </div>
        </div>

        <CountrySelect
          countries={countryStateData}
          selectedCountry={selectedCountry}
          onCountryChange={handleCountryChange}
        />
      </div>

      {/* Payment Section */}
      <div className='bg-white border-y lg:border-y-0 border-neutral-550 p-4 mx-auto'>
        <h2 className='text-2xl font-bold mb-2 text-neutral-450'>Payment</h2>
        <p className='font-normal text-xs mb-3 text-neutral-850'>
          All transactions are secure and encrypted.
        </p>
        <div>
          <div className='flex items-center bg-blue-150 border rounded-t-md border-blue-750 p-4'>
            <label className='flex items-center cursor-pointer'>
              <input
                type='radio'
                value='creditCard'
                checked={true}
                {...register('paymentMethod')}
                className='hidden'
              />
              <div
                className={`w-5 h-5 border rounded-full flex items-center justify-center mr-2 ${
                  selectedMethod === 'creditCard'
                    ? 'border-blue-500'
                    : 'border-gray-300'
                }`}
              >
                {selectedMethod === 'creditCard' && (
                  <div className='w-[10px] h-[10px] bg-blue-500 rounded-full'></div>
                )}
              </div>
              <span className='text-neutral-450 font-normal text-sm'>
                Credit Card
              </span>
            </label>

            <div className='flex items-center ml-auto space-x-[3px]'>
              <img src={Visa} alt='Visa' className='w-9 h-6' />
              <img src={Mastercard} alt='Mastercard' className='w-9 h-6' />
              <img src={Amex} alt='Amex' className='w-9 h-6' />
              <img src={DinersClub} alt='Diners Club' className='w-9 h-6' />
              <img src={Discover} alt='Discover' className='w-9 h-6' />
            </div>
          </div>

          <div className='bg-zinc-50 p-4 border rounded-b-md mb-3 lg:mb-4'>
            <InputField
              className='mb-4'
              placeholder='Card Number'
              {...register('cardNumber', {
                required: 'Card number is required',
                validate: (value) => {
                  const strippedValue = value.replace(/\s+/g, '');
                  return strippedValue.length === 16 ||
                    strippedValue.length === 15
                    ? true
                    : 'Card number must be 15-16 digits';
                },
                onChange: (e) => {
                  e.target.value = formatCardNumber(e.target.value);
                },
              })}
            />
            {errors.cardNumber?.message && (
              <p className='text-red-500'>
                {errors.cardNumber.message as string}
              </p>
            )}

            <div className='flex mb-4 gap-2'>
              <div className='w-full'>
                <InputField
                  placeholder='Expiration (MM/YY)'
                  {...register('expiryDate', {
                    required: 'Expiration date is required',
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                      message: 'Invalid expiration date format',
                    },
                  })}
                />
                {errors.expiryDate?.message && (
                  <p className='text-red-500'>
                    {errors.expiryDate.message as string}
                  </p>
                )}
              </div>
              <div className='w-full'>
                <InputField
                  placeholder='Security Code'
                  {...register('securityCode', {
                    required: 'Security code is required',
                    pattern: {
                      value: /^\d{3,4}$/,
                      message: 'Invalid security code',
                    },
                  })}
                />
                {errors.securityCode?.message && (
                  <p className='text-red-500'>
                    {errors.securityCode.message as string}
                  </p>
                )}
              </div>
            </div>
            <InputField
              className='w-full'
              placeholder='Name on card'
              {...register('cardHolderName', {
                required: 'Name on card is required',
              })}
            />
            {errors.cardHolderName?.message && (
              <p className='text-red-500'>
                {errors.cardHolderName.message as string}
              </p>
            )}
          </div>

          <Button />
          <div className='flex items-center justify-center'>
            <img src={Lock} alt='Lock' className='mr-2' />
            <p className='text-neutral-850 text-sm font-normal'>
              All transactions are secure and encrypted
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DeliveryInformation;
