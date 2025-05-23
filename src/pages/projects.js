import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/chatpdf.png"
import project2 from "../../public/images/projects/posterr.jpg"
import project3 from "../../public/images/projects/santander.png"
import project4 from "../../public/images/projects/aballad.png"
import project5 from "../../public/images/projects/cricket.png"
import project6 from "../../public/images/projects/machine.png"
import {motion} from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);



const FeaturedProject = ({type,title,summary,img,link}) =>{
    return(
        <article className='w-full flex items-center justify-between relative rounded-3xl border rounded-br-2xl border-solid border-dark bg-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
        xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]
        '/>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl xs:text-base
                '>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2  className='my-2 w-full text-left text-4xl font-bold xs:text-sm'>{title}</h2>
            </Link>

            <p className='my-2 font-medium text-dark sm:text-sm
            '>{summary}</p>
            
            
            <div className='mt-2 flex items-center'>
            
            

            <Link href={link} target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
            >
            Visit Project
            </Link>
            
            </div>
            </div>
        </article>
    )

}

const PrevProject = ({title,summary,img,link}) =>{
    return(
        <article className='w-full flex items-center justify-between relative rounded-3xl border rounded-br-2xl border-solid border-dark bg-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
        xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]
        '/>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2  className='my-2 w-full text-left text-4xl font-bold xs:text-sm'>{title}</h2>
            </Link>

            <p className='my-2 font-medium text-dark sm:text-sm
            '>{summary}</p>
            
            
            <div className='mt-2 flex items-center'>
            
            

            <Link href={link} target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
            >
            website
            </Link>
            
            </div>
            </div>
        </article>
    )

}


const Project = ({title,type,img,link,github}) =>{

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            '/>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}

                
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl lg:text-lg md:text-base
                '>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2  className='my-2 w-full text-left text-3xl font-bold lg:text-2xl
                '>{title}</h2>
            </Link>

            
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target="_blank"
            className="text-lg font-semibold underline md:text-base
            "
            >
            Visit
            </Link>
            
            
            <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon/>
            </Link>

            
            
            </div>
            </div>

        </article>
    )

}



const projects = () => {
  return (
    <>
    
    <Head>
        <title>Gilson | Previous Projects</title>
        <meta name="decryption" content="This is the projects page of Gilson Paul George"/>
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Imagination Trumps knowledge!"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
            />
            <div className='grid grid-cols-12 gap-24 gap-y-32
            xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0
            '>
                <div className='col-span-12'>
                <PrevProject
                    title="ChatPDF: Interacting with Embedded Knowledge" 
                    img = {project1}
                    summary="Built an interactive chatbot using Python, Streamlit, and NLP techniques. Extracts text and images from PDFs, matches user queries, and enhances document-based knowledge retrieval."
                    link="https://github.com/joygeo007/Chat_with_pdf_images"
                    
                    
                    

                    />
                </div>
                <div className='col-span-12 '>
                
                    <PrevProject 
                    title="A Ballad of NLP: Automated Lyric Generation" 
                    img = {project4}
                    summary="Used deep learning and NLP to create AI models generating authentic song lyrics. Trained LSTM and fine-tuned GPT-2 on a curated dataset of 10,000 lyrics. Project success was further validated through a peer review, where colleagues and fellow students praised the remarkable similarity between the generated lyrics and the target artists' styles"
                    link="https://github.com/joygeo007/A_Ballad_of_NLP_AI3_Project"
                    
                    />
                </div>
                

            </div>
        </Layout>
    </main>
    
    </>
  )
}

export default projects