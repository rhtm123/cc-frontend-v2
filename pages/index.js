import Head from "next/head";
import Link from "next/link";

import { ScholarshipNav } from "@/components/BannerNav";


export default function Home() {
  return (
    <>
    <Head>
        <title>Home | Coding Chaska </title>
        <meta name="description" content="First Computer Classes in Naigaon East. Learn Website Development, Frontend Development, Backend Development, Data Science, Python JavaScript & App Development" />
      </Head>


    <div className="container max-w-none">
 <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/images/about/about03/about-us-03-image-01.png" className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Coding Chaska's Programs</h1>

      <p className="py-6">Avail benefits of Job-Ready Programs at a reasonable free. Get expert assistance from our experienced trainers and mentors at every step in your journey. </p>
     <Link href={"/programs"}><button className="btn btn-primary">Get Started</button></Link> 
    </div>
  </div>
</div>


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/images/others/home-5-image-01.png" className="max-w-sm rounded-lg" />
    <div>
    
      <h1 className="text-5xl font-bold">Coding Chaska's Courses</h1>
      <p className="py-6">We have created self-paced online courses where you can advance your programming skills. These interactive courses contain a lot of problems, assignments & mini projects</p>

      <Link href="/live-courses"><button className="btn btn-primary">Live Courses</button></Link>
      <Link href="/self-paced-courses"><button className="ml-4 btn btn-primary">Self Paced Courses</button></Link>

    </div>
  </div>
</div>

<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/images/intro/coding_problem.png" className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Quizzes & Coding Problems</h1>


      <p className="py-6">We have created coding problems that will help you to improve you programming logic. It contains all types of problems for a beginner to an advanced coder.</p>     
      
    <Link href="quizzes"><button className="btn btn-primary">Quizzes</button></Link>
    <Link href="http://www.codingchaskalab.com/coding-problems"> <button className="ml-4 btn btn-primary">Coding Problems</button></Link> 

    </div>
  </div>
</div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/images/intro/cc_editor.png" className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Write Code Online</h1>
      <p className="py-6">We have built our Online Editor where you can code without installing anything. Just register and start coding. Your works will be saved in your account.</p>

     <a rel="noreferrer" target="_blank" href="http://www.codingchaskalab.com"><button className="btn btn-primary">Start Now</button></a>
    </div>
  </div>
</div>


<div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-4xl font-bold">We are highly rated on Google Reviews.</h1>
      <br />

      <div className='text-center'>
      {/* <a href='https://www.google.com/search?q=coding+chaska'>
      </a> */}

  </div>

    <a rel="noreferrer" target="_blank" href="https://www.google.com/search?q=codingchaska"><button className="btn btn-primary">Search on Google</button></a>
    </div>
  </div>
</div>

    </div>
    </>
    )
}
