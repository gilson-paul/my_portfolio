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
        <title>Gilson | About Page</title>
        <meta name="decryption" content="This is the about page of Gilson Paul George"/>
    </Head>
    <TransitionEffect/>
    <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 place-items-center">
            <div className="col-span-4 flex flex-col items-start justify-center xl:col-span-8 md:order-2 md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75"> About me</h2>
                <p className="font-medium">
                    Hey there! I am Paul, a Project Manager who specializes in turning e-commerce chaos into streamlined success stories—kind of like a digital superhero, but without the cape (it’s hard to type with one on!). I build highly cost-effective remote teams that not only get the job done but also know how to have a good time while doing it. Think of me as the conductor of an orchestra—if the orchestra played in different time zones and communicated exclusively through Slack!
                </p>
                <p className="my-4 font-medium">
                    My secret sauce? A sprinkle of continuous improvement and a dash of client collaboration. I dive deep into understanding my clients' strategic objectives, helping them scale and stay agile in a world that moves faster than a footballer on a breakaway. Also, I recently wrapped up my MBA in International Business, which means I can now analyze business cases with the same enthusiasm I reserve for debating the latest La Liga match. Who knew case studies could be as thrilling as a last-minute goal? My experiences, combined with academic insights, have given me a unique perspective on the entrepreneurial journey—because let’s face it, every business needs a little bit of magic (and maybe a good cup of coffee).
                </p>
            </div>
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-8 md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                <Image
                    src={profilePic}
                    alt="Gilson"
                    className="w-full h-auto rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
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
                '>projects managed</h2>
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
        


        <Skills/>
        <Experience/>
        <Education/>
        </Layout>
        

    </main>
    </>
  )
}

export default about