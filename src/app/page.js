import Image from 'next/image'
import profile from '../../public/images/profile.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

export default function Home() {
  return (
    <main className="flex min-h-[100%] w-full  items-center justify-between mt-[7rem] bg-[#f5f6fa]">
      <div className=" w-[50%] h-[80vh] flex justify-center items-center">
        <Image className='h-[70%] w-[80%]' src={profile} alt='Prashant' />
      </div>
      <div className=" w-[50%] h-[80%] p-5 flex flex-col items-center self-center text-left">

        <AnimatedText
          text="Turning Vision Into Reality With Code And Design"
          className='!text-5xl'
        />
        <p className='my-4 text-base font-medium '>
          As a skilled full-stack developer, I am to turning ideas into innovative web applications, Explore my latest projects , showcasing my expertise in React.js , Next.js and web development
        </p>
        <div className=" flex items-center self-start mt-2">
          <Link
            className='flex  items-center gap-2 bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition 0.3s ease-in border-[2px] border-black hover:border-[2px]'
            download={true}
            target={'_blank'}
            href="/resume.pdf">
            <p>Resume</p>
            <BsFillArrowDownCircleFill />
          </Link>
          <Link
          className=' ml-4 text-lg font-medium capitalize text-dark underline'
          target={'_blank'} href="mailto:sharmaprashant2505@gmail.com">
            Contact
          </Link>

        </div>
      </div>
    </main>
  )
}
