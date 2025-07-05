import React from 'react'
import StarBackground  from "./StarBackground"
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'




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
        {/* Add more sections like Skills, Projects, Contact, etc. */}
      </main>

      {/* Footer */}
    </div>
  )
}

export default Home
