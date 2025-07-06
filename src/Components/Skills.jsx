import React, { useState } from 'react'
import { cn } from '@Lib/utils'

const Skills = () => {

    const [activeCategory, setActiveCategory] = useState ('all')
  const skills = [
    { name: 'HTML/CSS', level: 80, category: 'Frontend' },
    { name: 'JavaScript', level: 50, category: 'Frontend' },
    { name: 'React', level: 55, category: 'Frontend' },
    { name: 'TypeScript', level: 50, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 60, category: 'Frontend' },
    { name: 'Next.Js', level: 50, category: 'Frontend' },
    { name: 'Node.js', level: 50, category: 'Backend' },
    { name: 'MongoDB', level: 55, category: 'Backend' },
    { name: 'Git/GitHub', level: 80, category: 'Tools' },
    { name: 'VS Code', level: 80, category: 'Tools' },
  ];

  const categories = ['all', 'Frontend', 'Backend', 'Tools'];

  return (
    <section id='skills' className='py-20 px-4 relative bg-secondary'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-4xl font-bold text-center mb-11'>
          My <span className='text-primary'>Skills</span>
        </h2>

        <div className='flex justify-center mb-11 flex-wrap gap-5'> 
            {categories.map((category, index) => (
                <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize')}
                >
                {category}
                </button>
            ))}
            </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skills.map((skill, index) => (
            <div key={index} className='bg-card p-6 rounded-lg shadow-xs card-hover bg-green-500'>
              <h3 className='font-semibold text-lg mb-2'>{skill.name}</h3>
              <p className='text-muted-foreground mb-2'>{skill.level}%</p>
              <div className='w-full bg-gray-300 h-2 rounded overflow-hidden'>
                <div
                  className='bg-primary h-2 rounded-full origin-left transition-all duration-500'
                  style={{ width: `${skill.level}%` }}
                />
              </div>
                <div className='text-smtext-muted-foregroung'>

                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
