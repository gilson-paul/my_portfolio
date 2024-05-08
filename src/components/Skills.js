import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name,x,y}) => {
  return (
  
  <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute 
  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold
  " 
  whileHover={{scale:1.05}} 
  initial={{x:0,y:0}}
  whileInView={{x:x,y:y}}
  transition={{duration:1.5}}
  
  >
      {name}
    </motion.div>

  )
}


const Skills = () => {
  return (
   <>
   <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32
   '>Skills</h2>
   <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
   lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
   lg:bg-circularLightLg
   md:bg-circularLightMd
   sm:bg-circularLightSm
   '>
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark p-2
    " whileHover={{scale:1.05}}>
      Machine Learning
    </motion.div>
    
    <Skill name='Python' x='-20vw' y='-2vw'/>
    <Skill name='Tensorflow' x='-5vw' y='-10vw'/>
    <Skill name='Scikit-Learn' x='20vw' y='6vw'/>
    <Skill name='Pytorch' x='0vw' y='12vw'/>
    <Skill name='Pandas' x='-20vw' y='-15vw'/>
    <Skill name='Numpy' x='15vw' y='-12vw'/>
    <Skill name='Deep Learning' x='32vw' y='-5vw'/>
    <Skill name='NLP' x='0vw' y='-20vw'/>
    <Skill name='Data Viz' x='-30vw' y='9vw'/>
    <Skill name='SQL/NoSQL' x='18vw' y='18vw'/>

   </div>
   </>
  )
}

export default Skills