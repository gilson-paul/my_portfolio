import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/pic.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000});
    const isInView = useInView(ref,{once:true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView,value, motionValue]);
    
    
    useEffect(() => {
        springValue.on ("change",(latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
        
    },[springValue,value])
    
    
    
    
    
    
    
    
    
    
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
    <Head>
        <title>Joyson | About Page</title>
        <meta name="decryption" content="This is the about page of Joyson Chacko George"/>
    </Head>
    <TransitionEffect/>
    <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
        <AnimatedText text="Passion Fuels Purpose!" className="mb-16
        lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8
        "/>
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75"> About me</h2>
                <p className="font-medium">
                Hey there! I'm Joyson, an aspiring ML engineer with an insatiable curiosity to explore the frontiers of AI. With a solid foundation, I've immersed myself in this field, constantly expanding my knowledge through specialized courses and hands-on projects.

                </p>

                <p className="my-4 font-medium">
                What drives me is a relentless passion for growth. I'm always seeking to master new skills and technologies, whether it's diving into CNNs or exploring the latest language models. In this ever-evolving landscape, I see endless possibilities for innovation. I'm excited to join a team who shares my passion for pushing boundaries and making an impact.
                </p>
                
                <p className="font-medium">
                If you're looking for an ML engineer with a fresh perspective, continuous learning mindset, and commitment to excellence, I'd love to discuss how my skills and enthusiasm can contribute to your organization's success. Let's explore the limitless potential of AI together!
                </p>

                
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
            xl:col-span-4 md:order-1 md:col-span-8
            '>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                <Image src={profilePic} alt="Joyson" className="w-full h-[150%] rounded-2xl "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center
            md:order-3
            '>
                <div className='flex flex-col items-end justify-center
                xl:items-center
                '>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value= {10}/>+
                        
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm
                    '>projects completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value= {1}/>
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm' >years of experience</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>        
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value= {3}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                </div>
            </div>
            


        </div>

        <Skills/>
        <Experience/>
        <Education/>
        </Layout>
        

    </main>
    </>
  )
}

export default about