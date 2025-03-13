import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion';

const HeroContent = ({ variants }) => {
    

    return (
    <motion.div variants = {variants} className='text-left md:max-w-72 lg:max-w-lg'>
        <p className='text-xl font-medium text-blue-300'>JONATHAN MUKADI</p>
        <h2 className='mt-4 font-serif text-3xl font-bold 
        tracking-wide text-white/80 md:text-4xl lg:mt-8 lg:text-5xl'
        >Software Developer</h2>

        <p className='mt-4 text-white/40 md:text-lg'>
            It's amazing to be a software developer because it allows me to solve problems,
            create innovative solutions, and bring visions to life with code.
            From designing sleek interfaces to building efficient backend systems,
            I enjoy every step of the development process.
        </p>

        <div className="flex items-center gap-2 mt-5">

            <a href="/MyResume.docx.pdf" download="Jonathan_Mukadi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Download My Résumé</Button>
            </a>
            
        </div>
    </motion.div>
   );
};

export default HeroContent