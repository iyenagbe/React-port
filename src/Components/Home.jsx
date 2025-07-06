import React from 'react'
import StarBackground  from "./StarBackground"
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Skills from './Skills'



const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-hidden'>
      {/* Toggle */}

      {/* Background Effects */}
      <StarBackground />

      {/* NavBar */}
      < NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
      </main>

      {/* Footer */}
    </div>
  )
}

export default Home
