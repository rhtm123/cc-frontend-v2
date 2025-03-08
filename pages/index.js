import Head from "next/head";
import Link from "next/link";

import React from "react";
import { GoCodeReview } from "react-icons/go";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

import { SiGoogleclassroom } from "react-icons/si";
import { FaStar } from "react-icons/fa";





export default function Home() {
  const [activeTab, setActiveTab] = React.useState("programs");
  return (
    <>
    <Head>
        <title>Home Page | Coding Chaska </title>
        <meta name="description" content="Master computer skills and coding with live and self-paced courses, job-ready programs, and coding challenges | Coding Chaska, Naigaon East, Mumbai" />
    </Head>

    <div className="container max-w-none bg-base-100 py-8" data-aos="fade-up">

{/* Grid */}
<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div>
    <h1 className="block text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight">
      Start your Coding journey with <span className="text-transparent
      bg-gradient-to-r bg-clip-text from-primary to-secondary
      animate-text">
        Coding Chaska</span>
    </h1>

    {/* Buttons */}
    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
      <Link
        className="btn btn-outline btn-primary"
        href="/programs"
      >
        Programs
      </Link>
      <Link
        className="btn btn-outline btn-primary"
        href="/live-courses"
      >
        Live Courses
      </Link>
      <Link
        className="btn btn-outline btn-primary"
        href="/self-paced-courses"
      >
        Self Paced Courses
      </Link>
    </div>
    {/* End Buttons */}
    
  </div>
  {/* End Col */}
  <div className="relative md:ms-4">
    <img
      className="w-full rounded-md"
      src="/images/home/hero_new.avif"
      alt="Computer Class in Naigaon"
    />
    
  </div>
  {/* End Col */}
</div>
{/* End Grid */}
</div>


    <div data-aos="fade-down" className="container max-w-none py-8">

    <div className="relative p-6 md:p-12">
      {/* Grid */}
      <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="mb-10 lg:mb-0 lg:col-span-6">
          <h2 className="text-2xl font-bold sm:text-3xl ">
            Coding Chaska offers a variety of courses to help you
          </h2>
          {/* Tab Navs */}
          <nav
            className="grid gap-4 mt-5 md:mt-10"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              onClick={()=>setActiveTab("programs")}
              onMouseEnter={()=>setActiveTab("programs")}
              className={"text-start hover:bg-primary p-4 md:p-5 rounded-xl " + (activeTab==="programs"? "border border-primary":"")}
            >
              <span className="flex">
                <GoCodeReview className="text-secondary" size={48} />
                <span className="grow ms-6">
                  <span className="text-secondary block text-lg font-semibold">
                    Job Ready Programs
                  </span>
                  <span className="block mt-1 hover:text-base-200">
                    Unlock career success with our affordable Job-Ready Programs: Website Development, Frontend & Backend Development, App Development, and Data Science.
                  </span>
                </span>
              </span>
            </button>
           
            <button
              type="button"
              onClick={()=>setActiveTab("live-courses")}
              onMouseEnter={()=>setActiveTab("live-courses")}

              className={"text-start hover:bg-primary p-4 md:p-5 rounded-xl " + (activeTab==="live-courses"? "border border-primary":"")}

            >
              <span className="flex">
                
                <SiGoogleclassroom className="text-secondary" size={48} />

                <span className="grow ms-6">
                  <span className="text-secondary block text-lg font-semibold">
                    Live Courses
                  </span>
                  <span className="block mt-1 hover:text-base-200">
                  Start your learning journey with our live courses: Python, C/C++, PHP, MySQL, Django, JavaScript, React, Next.js, Java, and more. Enroll today to advance your skills.
                  </span>
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={()=>setActiveTab("self-paced-courses")}
              onMouseEnter={()=>setActiveTab("self-paced-courses")}

              className={"text-start hover:bg-primary p-4 md:p-5 rounded-xl " + (activeTab==="self-paced-courses"? "border border-primary":"")}
            >
              <span className="flex">
                
              <HiOutlineComputerDesktop className="text-secondary" size={48} />

                <span className="grow ms-6">
                  <span className="text-secondary block text-lg font-semibold">
                    Self Paced Courses
                  </span>
                  <span className="block mt-1 hover:text-base-200">
                  Discover our self-paced online courses, filled with interactive modules, assignments, and mini-projects: HTML/CSS, Python, Computer Basics, JavaScript & more.
                  </span>
                </span>
              </span>
            </button>
          </nav>
          {/* End Tab Navs */}
        </div>
        {/* End Col */}
        <div className="lg:col-span-6">
          <div className="relative">
            {/* Tab Content */}
            <div>
              {activeTab==="programs" &&
              <div>

              <Link href="/programs">
              
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                  src="/images/home/home_3.avif"
                  alt="Coding Chaska Program"
                />
                </Link>
              </div>

              }


{activeTab==="live-courses" &&

              <div
                
              >
                              <Link href="/live-courses">

                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                  src="/images/home/home_2.avif"
                  alt="Coding Chaska Live Course"
                />
                </Link>
              </div>

            }



{activeTab==="self-paced-courses" &&

              <div
                
              >

            <Link href="/self-paced-courses">

                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                  src="/images/home/home_1.avif"
                  alt="Coding Chaska Self Paced Courses"
                />
                </Link>
              </div>

          }


            </div>
            {/* End Tab Content */}
            {/* SVG Element */}
            <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
              <svg
                className="w-16 h-auto text-secondary"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      {/* Background Color */}
      <div className="absolute inset-0 grid grid-cols-12 size-full">
        <div className="col-span-full lg:col-span-7 bg-base-200 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full" />
      </div>
    </div>
  </div>
  {/* End Features */}

<div data-aos="fade-up" className="container max-w-none hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt="Coding Chaska Coding Problems" src="/images/intro/coding_problem.png" className="w-full rounded-lg" />
    <div>
      <h2 className="text-5xl font-bold">Quizzes & Coding Problems</h2>


      <p className="py-6">We have created coding problems that will help you to improve you programming logic. It contains all types of problems for a beginner to an advanced coder.</p>     
      
    <Link href="quizzes"><button data-aos="fade" className="btn btn-primary btn-outline">Quizzes</button></Link>
    <a target="_blank" href="http://www.codingchaskalab.com/coding-problems"> <button data-aos="fade" className="ml-4 btn btn-primary btn-outline">Coding Problems</button></a> 

    </div>
  </div>
</div>

<br />

<div data-aos="fade-down" className="container max-w-none hero card rounded-xl min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img alt="Coding Chaska Online Editor" src="/images/intro/cc_editor.png" className="w-full rounded-lg" />
    <div>
      <h2 className="text-5xl font-bold">Write Code Online</h2>
      <p className="py-6">We have built our Online Editor where you can code without installing anything. Just register and start coding. Your works will be saved in your account.</p>

     <a rel="noreferrer" target="_blank" href="http://www.codingchaskalab.com"><button data-aos="fade" className="btn btn-primary btn-outline">Start Now</button></a>
    </div>
  </div>
</div>


<div data-aos="fade-up" className="container max-w-none hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h3 className="text-4xl font-bold">We are highly rated on Google Reviews.</h3>

      <div className='text-center flex items-center justify-center py-4'>
      <FaStar className="text-yellow-500 mr-1" /> 
      <FaStar className="text-yellow-500 mr-1" />
      <FaStar className="text-yellow-500 mr-1" />
      <FaStar className="text-yellow-500 mr-1" />
      <FaStar className="text-yellow-500 mr-1" />
 
      <span className="pl-2">
      5/5 (100+ Reviews)
      </span>


      

      </div>

      <a rel="noreferrer" target="_blank" href="https://www.google.com/search?q=codingchaska"><button data-aos="fade" className="btn btn-secondary btn-outline">Search on Google</button></a>

          

    </div>
  </div>
</div>

    </>
    )
}
