    import React from 'react'
    import { Code, User, Briefcase } from 'lucide-react';

    const AboutMe = () => {
    return (
        <section id='about' className='py-23 px-5 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-11 text-center'>
            About <span className='text-primary'>Me</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
            {/* First column: Text and buttons */}
            <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>Passionate Web Developer & Digital Creator</h3>
                <p className='text-muted-foreground'>
                I’m a Full Stack Developer and Blockchain enthusiast driven by a passion for creating clean,  
                elegant, and interactive digital solutions. Over the past 2 years of hands-on experience, I’ve 
                combined modern design with advanced web technologies to build products that look stunning and feel seamless.
                </p>

                {/* <p className='text-muted-foreground'>
                I’m a Full Stack Developer and Blockchain enthusiast dedicated to crafting clean,
                interactive, and impactful digital products. I blend modern design principles with cutting-edge
                web technologies to create seamless user experiences that not only look beautiful
                but also feel intuitive and engaging.
                </p> */}

               <div className='flex flex-col sm:flex-row gap-5 pt-4 justify-center'>
                <a href="" className='page-button'>
                    Get in Touch
                </a>
                <a href="" className='px-6 py-2 rounded-full border border-primary text-primary
                 hover:bg-primary/12 transition-colors duration-300'>
                    Download Resume
                </a>
                </div>

            </div>

            {/* Second column: Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-full bg-primary/20'>
                    <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                    <h4 className='font-semibold text-lg'>Web Development</h4>
                    <p className='text-muted-foreground text-sm'>Writing clean and scalable code using modern flameworks.</p>
                    </div>
                </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-full bg-primary/20'>
                    <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                    <h4 className='font-semibold'>UI/UX</h4>
                    <p className='text-muted-foreground text-sm'>Designing intuitive and beautiful interfaces.</p>
                    </div>
                </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-full bg-primary/20'>
                    <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                    <h4 className='font-semibold'>Projects Management</h4>
                    <p className='text-muted-foreground text-sm'>Each project reflects my commitment to clean code,
                        intuitive design, and meaningful impact.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
        </section>
    )
    }

    export default AboutMe
