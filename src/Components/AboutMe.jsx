import React from 'react'

const AboutMe = () => {
  return (
    <section id='about' className='py-23 px-5 relative'>
        <div className='container max-auto max-w-5xl'> 
            <h2 className='text-3xl md:text-4xl font-bold mb-11 text-center '>
                About <span className='text-primary'>Me</span>
            </h2>

            <div className='grid grid-cols-1 mg:grid-cols-2 gap-12 items-center'>
                {/* first */}
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold' >Passionate Web Developer & Digital Creator</h3>
                     <p className='text-muted-foreground'>
                        With a strong foundation in both front-end and back-end development, I thrive on turning complex problems <br />
                        into elegant solutions. My 2 years journey in the tech world has equipped me with a diverse skill set, <br /> allowing me to adapt and innovate in an ever-evolving landscape.
                    </p>

                    <p className='text-muted-foreground'>
                        I’m a Full Stack Developer and BlockChain enthusiast dedicated to crafting clean,
                    interactive, and impactful  <br />digital products. I blend modern design principles with cutting-edge
                    web technologies to create <br /> seamlessuser experiences that not only look beautiful
                    but also feel intuitive and engaging.
                    </p>

                   

                </div>
                {/* second */}
                <div>

                </div>
            </div>

        </div>

    </section>
  )
}

export default AboutMe
