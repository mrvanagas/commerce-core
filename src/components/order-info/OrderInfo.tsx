import { useState } from 'react';
import Chevron from '../../images/Chevron.svg';
import Product from '../../images/product.png';

const OrderInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full max-w-4xl mx-auto'>
      <div className='block lg:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='w-full p-4 bg-neutral-100 text-neutral-450 text-left focus:outline-none flex items-center'
        >
          <span className='text-sm'>Order overview</span>
          <img
            src={Chevron}
            className={`ml-2 transform transition-transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <p className='ml-auto text-sm text-neutral-450 font-medium'>
            $299.97
          </p>
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className='p-4 bg-neutral-100'>
            <div className='border-y border-neutral-550'>
              <div className='py-4 flex items-center'>
                <div className='relative'>
                  <img
                    src={Product}
                    alt='product'
                    className='h-16 w-16 rounded'
                  />
                  <span className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-neutral-650 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                    3
                  </span>
                </div>
                <p className='text-sm font-bold text-neutral-450 ml-4'>
                  LogoIpsum
                </p>
                <p className='ml-auto text-sm text-neutral-450 font-medium'>
                  $299.97
                </p>
              </div>
            </div>

            <div className='py-4 flex items-center border-b border-neutral-550'>
              <p className='text-sm font-normal text-neutral-450'>Subtotal</p>
              <p className='ml-auto text-sm text-neutral-450 font-medium'>
                $299.97
              </p>
            </div>
            <div className='py-4 flex items-center border-b border-neutral-550'>
              <p className='text-base font-bold text-neutral-450'>Total</p>
              <p className='ml-auto text-base font-bold text-neutral-450'>
                $299.97
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className='p-4 bg-neutral-100 text-neutral-450'>
          <h2 className='text-xl'>Accordion Title (Desktop)</h2>
        </div>
        <div className='p-4 bg-gray-100'>
          <p>
            This is the desktop content of the accordion. It doesn't collapse
            like the mobile version.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
