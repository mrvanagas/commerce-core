import { useState } from 'react';
import Chevron from '../../images/Chevron.svg';

const OrderInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full max-w-4xl mx-auto mt-10'>
      {/* Mobile View: Accordion */}
      <div className='block lg:hidden'>
        {/* Visible only on small screens (lg:hidden) */}
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
        </button>
        {/* Mobile Accordion Content */}
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className='p-4 bg-gray-100'>
            <p>This is the mobile content of the accordion.</p>
          </div>
        </div>
      </div>

      {/* Desktop View: Static Content */}
      <div className='hidden lg:block'>
        {' '}
        {/* Visible only on large screens and up (lg:block) */}
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
