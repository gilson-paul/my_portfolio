import React, { useRef } from 'react'
import {useScroll} from 'framer-motion'
import { motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time ,address,work}) =>{
    const ref=useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5,type:"spring"}}>
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
                >{position}&nbsp; <a href={companyLink}
                target="_blank" className='text-primary capitalize'
                >@{company}</a> </h3>
                <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>    
    )


}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    );
  return (
    <div className='my-64'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:4xl md:mb-16'>
    Experience
    </h2>
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div 
        style={{scaleY:scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
            position="NLP Engineer"
            companyLink="https://www.upwork.com/freelancers/~013e500807b48bee4a"
            company="Upwork"
            time="Feb 2024-Present"
            address="Remote"
            work="Worked on developing an advanced chatbot using OpenAI API, Langchain, and Streamlit to extract and interact with PDF content. The chatbot answered queries and retrieved relevant images, enhancing information retrieval and user experience."
            />
            <Details
            position="Data Analyst"
            companyLink="https://www.upwork.com/freelancers/~013e500807b48bee4a"
            company="Upwork"
            time="Oct 2023-Jan 2024"
            address="Remote"
            work="Worked on managing a 4,000-student alumni dataset, linking data from Excel, Airtable, and SQL databases, and reduced the project timeline by 50% through pattern identification and utilized NER models to extract specific information, resulting in high employer satisfaction and further collaboration. "
            />
            <Details
            position="Freelance Intern"
            companyLink="https://www.upwork.com/freelancers/~013e500807b48bee4a"
            company="Arya Book Depot"
            time="June 2023-August 2023"
            address="Remote"
            work="Conducted comprehensive reviews of computer science textbooks for grades 4-9, demonstrating meticulous attention to detail. Authored engaging questions and answers, showcasing creativity and in-depth subject knowledge. Ensured content accuracy and clarity through precise proofreading. Efficiently managed multiple tasks within tight deadlines, highlighting strong time management and commitment to quality."
            />
        </ul>

    </div>
    </div>
  )
}

export default Experience