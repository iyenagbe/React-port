import React from 'react';
import { ArrowDown } from 'lucide-react';
import Assets from '@/assets/hero2.jpeg';

const HeroSection = () => {
  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center px-4 py-24 relative">
      {/* Text section */}
      <div className="container max-w-3xl mx-auto text-center md:text-left md:ml-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="block md:inline opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-pink-900 to-purple-900 text-transparent bg-clip-text">
              Iyenagbe O. 
            </span>
            <span className="block md:inline opacity-0 animate-fade-in-delay-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"> Raymond
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I’m a skilled and passionate Full Stack web developer <br />  with experience in creating dynamic and responsive web applications.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="page-button">
              View My work
            </a>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="flex justify-center mt-8 md:mt-0">
        <img 
          src={Assets}
          alt="Hero"
          className="rounded-full w-64 h-64 md:w-96 md:h-96 border-4 border-primary object-cover shadow-lg"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
