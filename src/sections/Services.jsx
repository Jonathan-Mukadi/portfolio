import React, { useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'
import { motion, useInView } from 'framer-motion'

const Services = () => {

  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef);

  const cardVariants = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    visible: (index)=> ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: index * 0.2,
        },
    }),
};


  return (
    <section className='py-16' id='services' ref={servicesRef}>
        <SectionTitle title="My Services"/>
        <div className='container mt-10 grid grid-cols-1 gap-4 md:grid-cols-2'>
            {services.map((service, index)=>(
                <motion.div key={service.title} custom = {index} variants = {cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <ServiceCard service={service} />
                </motion.div>
            ))}
        </div>
    </section>
  );
};

export default Services