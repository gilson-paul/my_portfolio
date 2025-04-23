import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/logo_pic.png"
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/bulbb.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="ML engineer portfolio" />
        
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="GPG" className="w-full h-auto lg:hidden md:inline-block md:w-full" 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Unlocking The Power Of Data Through Machine Learning" className="!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              "/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs
              
              '> As a skilled ML engineer with a curiosity and a passion for exploring AI frontiers, I harness the latest machine learning techniques to extract valuable insights from data. Delve into my projects showcasing my expertise in deep learning, natural language processing, and cutting-edge model development. </p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link href="/my_resume.pdf" target={"_blank"}
              className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base
              '
              download={true}
              >Resume<LinkArrow className={"w-6 ml-1"}/>
              
              </Link>
              <Link href="/contact"
              className='ml-4 text-lg font-medium capitalize text-dark underline md:text-base
              '
              >Contact</Link>
            </div>
            </div>

          </div>

        </Layout>
        <HireMe/>
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="Gil" className="w-full h-auto"/>
        </div>
      </main>
    </>
  )
}
