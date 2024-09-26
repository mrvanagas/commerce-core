import Contact from './components/contact/Contact';
import Delivery from './components/delivery/Delivery';
import Navbar from './components/navbar/Navbar';
import OrderInfo from './components/order-info/OrderInfo';
import OurBenefits from './components/our-benefits/OurBenefits';
import Payment from './components/payment/Payment';

function App() {
  return (
    <div className='bg-neutral-100 lg:bg-white'>
      <Navbar />
      {/* Desktop layout */}
      <div className='hidden lg:block'>
        <div className='lg:flex lg:justify-center'>
          <div className='lg:w-full'>
            <div className='pr-9 max-w-[550px] ml-auto'>
              <Contact />
              <Delivery />
              <Payment />
            </div>
          </div>
          <div className='bg-neutral-100 lg:w-full'>
            <div className='border-l pl-9 max-w-[535px] mr-auto'>
              <div className='hidden lg:block'>
                <OrderInfo />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='block lg:hidden'>
        <OrderInfo />
        <Contact />
        <Delivery />
        <Payment />
        <OurBenefits />
      </div>
    </div>
  );
}

export default App;
