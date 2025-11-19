import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/layout/Navbar"
import Hero from "./components/home/Hero"
import About from "./components/about/About"
import WhyChooseUs from './components/chooseus/WhyChooseUs'
import ConstructionSection from "./components/construction/ConstructionSection"
import TeamMember from './components/Team/TeamMember'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <WhyChooseUs />
     <ConstructionSection />
    
      <h1 className="w-full text-center text-3xl font-bold my-6">Meet Our Team</h1>
        <TeamMember /> 
        <ContactSection />
        <Footer />
    </>
  )
}

export default App
