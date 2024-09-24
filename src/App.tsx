import './App.css'
import Contact from './components/contact/Contact'
import Delivery from './components/delivery/Delivery'
import Navbar from './components/navbar/Navbar'
import OrderInfo from './components/order-info/OrderInfo'
import Payment from './components/payment/Payment'

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar />
      <OrderInfo />
      <Contact />
      <Delivery />
      <Payment />
    </div>
  )
}

export default App
