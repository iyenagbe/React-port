import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='py-23 px-4 relative bg-secondary/40'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className='text-center text-muted-foreground mb-11 max-w-2xl mx-auto'>
          Having a project in mind or a collaboration? Feel free to contact me.
          I'm always open to new opportunities.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-11'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Info</h3>

            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/12'>
                  <Phone className='h-5 w-5 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <a href="tel:+2348121264733" className='text-muted-foreground hover:text-primary transition-colors'>
                    +234 8121264733
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/12'>
                  <Mail className='h-5 w-5 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a href="mailto:iyenagbe7@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                    iyenagbe7@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/12'>
                  <MapPin className='h-5 w-5 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <p className='text-muted-foreground hover:text-primary transition-colors'>
                    Lagos, Nigeria.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-center'>
                <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'>
                  <Linkedin />
                </a>
                <a href="https://twitter.com" target='_blank' rel='noopener noreferrer'>
                  <Twitter />
                </a>
                <a href="https://facebook.com" target='_blank' rel='noopener noreferrer'>
                  <Facebook />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
