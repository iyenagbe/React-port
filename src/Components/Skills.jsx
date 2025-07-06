    import { Key } from 'lucide-react';
import React from 'react'

    const Skills = () => {
    const skills = [
                                        // frontend
                { name: 'HTML/CSS', level: 'Intermediate', category: 'Frontend' },
                { name: 'JavaScript', level: 'Intermediate', category: 'Frontend' },
                { name: 'React', level: 'Intermediate', category: 'Frontend' },
                { name: 'TypeScript', level: 'Intermediate', category: 'Frontend' },
                { name: 'Tailwind CSS', level: 'Intermediate', category: 'Frontend' },
                { name: 'Next.Js', level: 'Intermediate', category: 'Frontend' },
                                        // backend
                { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
                { name: 'MongoDB', level: 'Intermediate', category: 'Backend' },
                                        // tools
                { name: 'Git/GitHub', level: 'Intermediate', category: 'Tools' },
                { name: 'VS Code', level: 'Intermediate', category: 'Tools' },
            ];

    return (
        <section id='Skills' className='py-23 px-4 relative bg-secondary'>
            <div className='container mx-auto max-w-5xl'>
                 <h2 className='text-4xl font-bold text-center mb-11 text-center'>
                     My <span className='text-primary'>Skills</span>
                </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {skills.map((skill, index) => (
                     <div key={index} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                        <div className='text-left mb-4'> 
                            <h3 className='font-semibold text-lg'>{skill.name}</h3>
                         </div>
                <div className='w-full bg-secondary/50 h-2 rounded overflow-hidden'>
                    <div className='bg-primary h-2 rounded-full origin-left animate-[glow_1.6s_ease-out]' 
                    style={{ width: skill.level + '%' }} />

                   </div>
                    </div>
            ))}

            </div>
                </div>
    </section>
            )
            }

    export default Skills
