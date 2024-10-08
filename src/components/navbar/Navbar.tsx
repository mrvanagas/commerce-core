import logo from '../../images/logoipsum-logo.png';
import shopping from '../../images/shopping-bag.png';

const Navbar = () => {
  return (
    <nav className='border-b border-neutral-100'>
      <div className='bg-white flex justify-between mx-auto p-4 h-[56px] md:h-[72px] max-w-[1100px]'>
          <a href='#'>
            <img src={logo}  className='h-6 md:h-full'/>
          </a>
          <a href='#'>
            <img src={shopping} />
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
