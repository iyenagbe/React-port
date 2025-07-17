  import { Phone, Mail, MapPin } from 'lucide-react';
  import React, { useState } from 'react';
  // import emailjs from 'emailjs-com';

      const Contact = () => {
      const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "cfb2d3bf-9663-4ffe-89e8-8b0c114117d4");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

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
              <div className='space-y-6'>
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
                    <a href="mailto:iyenagberaymond@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                      iyenagberaymond@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='p-3 rounded-full bg-primary/12'>
                    <MapPin className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-medium'>Location</h4>
                    <p className='text-muted-foreground'>Lagos, Nigeria.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
              <form onSubmit={onSubmit} className='space-y-4'>
                <div>
                  <label className='block mb-1'>Your name</label>
                  <input type="text" name='name' placeholder='Enter your name' required maxLength={50} className='w-full p-2 border border-primary rounded' />
                </div>

                <div>
                  <label className='block mb-1'>Phone Number</label>
                  <input type="tel" name='phone' placeholder='Enter your phone number' required maxLength={20} className='w-full p-2 border border-primary rounded' />
                </div>

                <div>
                  <label className='block mb-1'>Message</label>
                  <textarea name="message" rows="6" placeholder='Enter your message' required maxLength={500} className='w-full p-2 border border-primary rounded'></textarea>
                </div>

                <button type='submit' className='page-button w-fit flex items-center mx-auto gap-2'>Send Message</button>
              </form>
              <span className='block mt-4 text-primary-600'>{result}</span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;
