
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/banner'
import Marquee from './components/marquee'
import Footer from './components/footer'
import ServiceCare from './components/serviceCare'
import Testimonials from './components/testimonials'
import Subscribeletter from './components/subscribeletter'
import BestProducts from './components/bestProducts'
import BeautySection from './components/beautySection'

function App() {


  return (
    <>
    <Navbar />
      <Hero/>
      <Marquee />
      <BeautySection/>
      <BestProducts/>
      <ServiceCare/>
      <Testimonials/>
      <Subscribeletter/>
      <Footer/>
    </>
  )
}

export default App
