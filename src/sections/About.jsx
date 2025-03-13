import React, { useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { motion, useInView } from 'framer-motion'

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };


    const textVariants = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    };

    return (
        <motion.section className='py-16' id='about' ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <SectionTitle title="About Me" />
            <div>
                {/* about content */}
                <motion.div className='container flex-1' variants={textVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <h1 className='font-serif text-4xl md:text-5xl font-semibold text-white/80 mt-4'>
                        I'm <span className='text-blue-500'>Jonathan Mukadi</span>
                    </h1>

                    <p className='mt-3 text-white/60 md:text-1xl sm:text-xl'>
                        Software Developer and Data Entry Specialist with a strong commitment to delivering high-quality work.
                        As a Developer, I focus on crafting functional, responsive, and visually appealing web applications.
                        I am passionate about creating intuitive user interfaces and seamless user experiences that make technology accessible and efficient.
                        In addition to my development skills, I excel as a Data Entry Specialist, bringing precision, speed, and a keen eye for detail to every task.
                        I have experience managing large datasets, ensuring accuracy, and organizing information effectively.
                        My ability to combine technical expertise with organizational skills enables me to handle complex projects efficiently.
                    </p>

                    <div>
                        <Button className="mt-5">Let's Work Together</Button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default About