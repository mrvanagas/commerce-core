import { useState } from 'react';
import Input from '../../shared/input/Input';
import Visa from '../../images/visa.png';
import Mastercard from '../../images/mastercard.png';
import DinersClub from '../../images/diners-club.png';
import Amex from '../../images/Amex.png';
import Discover from '../../images/discover.png';
import Button from '../../shared/button/Button';
import Lock from '../../images/lock.png';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('creditCard');

  return (
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
              name='paymentMethod'
              value='creditCard'
              checked={selectedMethod === 'creditCard'}
              onChange={() => setSelectedMethod('creditCard')}
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
          <Input className='mb-4' placeholder='Card Number' />
          <div className='flex justify-between mb-4 gap-2'>
            <Input className='w-full' placeholder='Expiration (MM/YY)' />
            <Input className='w-full' placeholder='Security Code' />
          </div>
          <Input className='w-full' placeholder='Name on card' />
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
  );
};

export default Payment;
