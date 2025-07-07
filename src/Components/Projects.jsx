import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react'

const Projects = () => {
  
    const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A beautiful landing page with a Language Translator, using HTML/CSS and JavaScript",
        image: '/',
        tags: ['HTML/CSS', 'JavaScript', 'Memory API'],
        demoUrl: '#',
        githubUrl: '#'
    },
    
    {
        id: 3,
        title: "Project Two",
        description: "A fully functing weather site that tells a real-time weather update, using HTML/CSS and JavaScript.",
        image: '/',
        tags: ['HTML/CSS', 'JavaScript', 'My Weather API'],
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: 2,
        title: "Project Three",
        description: "A dynamic Edu website using React and Tailwind CSS.",
        image: '/',
        tags: ['React', 'Tailwind CSS'],
        demoUrl: '#',
        githubUrl: '#'
    },
    
];

    return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'> 
                {''}
            Featured <span className='text-primary '> Projects </span></h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Here are some of my recent projects that showcase my skills and creativity. 
                Click on the links to view the live demos or the source code on GitHub.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {projects.map((project, key) => (
                    <div key={project.id} className='bg-card rounded-lg shadow-xs overflow-hidden card-hover'>

                        <div className='h-45 overflow-hidden'>
                            <img 
                            src={project.image}
                            alt={project.title}
                        className='w-full h-full object--cover transition-transform duration-400 group-hover:scale-110'
                        />
                        </div>
            <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag, index) => (
                        <span key={index} className='text-xs font-medium rounded-full bg-secondary text-secondary-foreground px-2 py-1 rounded-full'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-4'>

                        <a href={project.demoUrl} target='blank' 
                        className='text-foreground/70 hover:text-primary transition-colors duration-300'>
                             <ExternalLink className='size=(20)'/>
                         </a>
                        <a href={project.githubUrl} target='blank'
                         className='text-foreground/70 hover:text-primary transition-colors duration-300'>
                             <Github className='size=(20)' />
                         </a>
                        {/* <a>
                             <ExternalLink />
                         </a> */}

                    </div>
                </div>
               </div>
                ))}
            </div>

                <div className='text-center mt-12'>
                    <a  href='https://github.com/iyenagbe' target='blank'
                    className='page-button w-fit flex items-center mx-auto gap-2'>
                        Check out my GitHub <ArrowRight size={60}/>
                    </a>

                </div>
        </div>
    </section>
  )
}

export default Projects
