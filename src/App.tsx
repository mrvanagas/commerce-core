import './App.css'
import Contact from './components/contact/Contact'
import Delivery from './components/delivery/Delivery'
import Navbar from './components/navbar/Navbar'
import OrderInfo from './components/order-info/OrderInfo'
import OurBenefits from './components/our-benefits/OurBenefits'
import Payment from './components/payment/Payment'

function App() {

  return (
    <div className='container bg-neutral-100'>
      <Navbar />
      <OrderInfo />
      <Contact />
      <Delivery />
      <Payment />
      <OurBenefits />
    </div>
  )
}

export default App
