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
                    <h3>Passionate Web Developer & Digital Creator</h3>

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
