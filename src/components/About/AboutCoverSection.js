import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/img-2.jpg"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="amaanbhati" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-semi-bold  text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            More about me at <a href='https://amaanbhati.tech'> amaanbhati.tech </a>
            </h2>
            <p className='font-medium mt-4 text-bold'>
            Constantly striving to improve (as Elon Musk says, “It’s very important to have a feedback loop, where you’re constantly thinking about what you’ve done and how you could be doing it better.” )
            </p>
            <p className='font-medium mt-4 text-base'>
            Your feedback and suggestions are highly appreciated! They help me refine my content and ensure it delivers the most value to you.
            </p>
            
        </div>
    </section>
  )
}

export default AboutCoverSection