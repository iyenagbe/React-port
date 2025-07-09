import React from 'react'
import StarBackground from "./StarBackground"
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Skills from './Skills'
import MyProjects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Assets from '@/assets/hero.jpeg' 

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-hidden'>
      {/* Toggle */}

      {/* Background Effects */}
      <StarBackground />

      {/* NavBar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        {/* <img src={Assets} alt="Hero" />  */}
        <AboutMe />
        <Skills />
        <MyProjects />
        <Contact />
        <Footer />
      </main>

      {/* Footer */}
    </div>
  )
}

export default Home
