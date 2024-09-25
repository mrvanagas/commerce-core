import Cashback from '../../images/cashback.png';
import Rating from '../../images/rating.png';
import Support from '../../images/customer-service.png';

const OurBenefits = () => {
  return (
    <div className='mt-4 mx-4 lg:mx-auto'>
      <div className='flex items-center mb-6'>
        <div className='flex-1 border-b border-neutral-550'></div>
        <h2 className='text-center text-sm font-normal text-neutral-450 mx-4'>
          Why Choose LogoIpsum
        </h2>
        <div className='flex-1 border-b border-neutral-550'></div>
      </div>

      <div>
        {/* Section 1 */}
        <div className='flex items-start'>
          <img src={Cashback} alt='Money Back Guarantee' className='mr-4' />
          <div>
            <h3 className='text-xs font-bold text-neutral-450 mb-2'>
              90-Day Money Back Guarantee
            </h3>
            <p className='text-xs text-neutral-650 font-normal mb-4'>
              We love our products and we're confident you will too! If you're
              not in love with your Logolpsum product, our easy return and
              refund policy is designed to make things as easy as possible for
              you.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className='flex items-start'>
          <img src={Rating} alt='Happy Customers' className='mr-4' />
          <div>
            <h3 className='text-xs font-bold text-neutral-450 mb-2'>
              Over 75,000+ Happy Customer
            </h3>
            <p className='text-xs text-neutral-650 font-normal mb-4'>
              Everyone that tries Logolpsum says it’s a must-have. We invest a
              lot of love and care into making our products, so you can enjoy
              seeing results when using it.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className='flex items-start'>
          <img src={Support} alt='Customer Support' className='mr-4' />
          <div>
            <h3 className='text-xs font-bold text-neutral-450  mb-2'>
              Professional Customer Support
            </h3>
            <p className='text-xs text-neutral-650 font-normal mb-4'>
              Our customer service works 24/7 for your satisfaction. Feel free
              to reach out to us anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
