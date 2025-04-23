import Head from "next/head";
import Link from "next/link";

import React from "react";
import { GoCodeReview } from "react-icons/go";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

import { SiGoogleclassroom } from "react-icons/si";
import { FaStar } from "react-icons/fa";

import { FaGraduationCap, FaChalkboardTeacher, FaLaptopCode, FaPlayCircle, FaUserFriends, FaChalkboard, FaUserGraduate } from "react-icons/fa";



export default function Home() {
  const [activeTab, setActiveTab] = React.useState("programs");


  const tabs = [
    {
      id: 'programs',
      title: 'Job Ready Programs',
      description: 'Unlock career success with our affordable Job-Ready Programs...',
      icon: GoCodeReview, // Imported icon component
      href: '/programs',
      image: '/images/home/home_3.avif'
    },
    {
      id: 'live-courses',
      title: 'Live Courses',
      description: 'Start your learning journey with our live courses...',
      icon: SiGoogleclassroom, // Imported icon component
      href: '/live-courses',
      image: '/images/home/home_2.avif'
    },
    {
      id: 'self-paced-courses',
      title: 'Self Paced Courses',
      description: 'Discover our self-paced online courses...',
      icon: HiOutlineComputerDesktop, // Imported icon component
      href: '/self-paced-courses',
      image: '/images/home/home_1.avif'
    }
  ];

  return (
    <>
      <Head>
        <title>Home Page | Coding Chaska </title>
        <meta name="description" content="Master computer skills and coding with live and self-paced courses, job-ready programs, and coding challenges | Coding Chaska, Naigaon East, Mumbai" />
      </Head>

      <div className="container max-w-none py-12 md:py-20 lg:py-28" data-aos="fade-up">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Content Column */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Future with{' '}
              <span className="text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text animate-gradient">
                Coding Chaska
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-base-content/80 mb-8">
              Join thousands of students who've launched successful tech careers through our comprehensive coding programs and courses.
            </p>

            {/* Buttons with icons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                className="btn btn-primary btn-wide shadow-lg hover:shadow-xl transition-all"
                href="/programs"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <FaGraduationCap className="mr-2" />
                Explore Programs
              </Link>
              <Link
                className="btn btn-outline btn-wide border-2 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                href="/live-courses"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <FaChalkboardTeacher className="mr-2" />
                Live Courses
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="btn btn-outline btn-wide border-2 hover:border-secondary/50 hover:bg-secondary/10 transition-colors"
                href="/self-paced-courses"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <FaLaptopCode className="mr-2" />
                Self-Paced Learning
              </Link>

            </div>
          </div>
          {/* End Content Column */}

          {/* Image Column */}
          <div className="order-1 md:order-2 relative" data-aos="zoom-in" data-aos-delay="300">
            <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl -z-10 rotate-3 hidden md:block"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-white dark:border-base-300">
              <img
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                src="/images/home/hero_new.avif"
                alt="Students learning coding at Coding Chaska"
              />
              {/* Decorative elements */}
              <div className="absolute bottom-4 left-4 bg-primary/90 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <FaUserGraduate className="mr-2" />
                  <span>500+ Students Enrolled</span>
                </div>
              </div>
            </div>
          </div>
          {/* End Image Column */}
        </div>
        {/* End Grid */}

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center" data-aos="fade-up" data-aos-delay="500">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-medium">5/5 (110+ Reviews)</span>
          </div>
          <div className="flex items-center">
            <FaUserFriends className="text-primary mr-2" />
            <span className="font-medium">1000+ Happy Students</span>
          </div>
          <div className="flex items-center">
            <FaChalkboard className="text-secondary mr-2" />
            <span className="font-medium">20+ Courses Available</span>
          </div>
        </div>
      </div>


      <div data-aos="fade-down" className="container max-w-none py-8 md:py-12">
        <div className="relative p-6 md:p-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-base-content">
            Transform Your Skills with Coding Chaska
          </h2>


          {/* Grid */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 mb-10 lg:mb-0">


              <div className="join join-vertical w-full gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`join-item text-start p-6 transition-all duration-300 ${activeTab === tab.id
                      ? 'bg-primary/10 border-l-4 border-primary'
                      : 'bg-base-200 hover:bg-primary/5'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <tab.icon className="flex-shrink-0 text-primary mt-1" size={28} />
                      <div>
                        <h3 className="text-lg font-semibold text-base-content">
                          {tab.title}
                        </h3>
                        <p className="text-sm text-base-content/80 mt-2">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7">
              <div className="relative rounded-box overflow-hidden shadow-xl aspect-video bg-base-200">
                {/* Single image container with transition */}
                <div className="relative w-full h-full transition-opacity duration-500">
                  {tabs.map((tab) => (
                    <Link
                      key={tab.id}
                      href={tab.href}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${activeTab === tab.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-8 -right-8 opacity-20">
                  <svg className="w-32 h-32 text-primary" viewBox="0 0 121 135">
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-base-200 via-base-100 to-transparent rounded-box" />
        </div>
      </div>

      {/* End Features */}



      <div data-aos="fade-up" className="container max-w-none hero min-h-[80vh] bg-gradient-to-br from-base-100 to-primary/10 ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-24">
          {/* Image with modern frame and animation */}
          <div
            className="relative w-full max-w-2xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl -z-10 rotate-6 hidden lg:block"></div>
            <img
              alt="Coding Chaska Coding Problems"
              src="/images/intro/coding_problem.png"
              className="w-full rounded-xl shadow-2xl border-2 border-base-200/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.01]"
            />
          </div>

          {/* Content section */}
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Master Coding Through Challenges
            </h2>

            <p className="py-6 text-lg opacity-90">
              Sharpen your programming logic with our carefully curated collection of problems.
              From beginner fundamentals to advanced algorithms, we've got challenges for every skill level.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="quizzes">
                <button
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="btn btn-primary btn-wide shadow-md hover:shadow-lg transition-shadow"
                >
                  Explore Quizzes
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.codingchaskalab.com/coding-problems"
              >
                <button
                  data-aos="fade-left"
                  data-aos-delay="400"
                  className="btn btn-outline btn-wide hover:btn-secondary transition-colors"
                >
                  Coding Problems
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div data-aos="fade-down" className="px-8 py-8">
        <div className="hero-content max-w-none bg-gradient-to-br from-base-100 via-primary/5 to-base-100 flex-col lg:flex-row rounded-lg">
          <img alt="Coding Chaska Online Editor" src="/images/intro/cc_editor.png" className="w-full rounded-lg" />
          <div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cloud-Based
              </span>{" "}
              <br />
              Code Editor
            </h2>




            <p className="py-6">We have built our Online Editor where you can code without installing anything. Just register and start coding. Your works will be saved in your account.</p>


            <div className="space-y-4 mb-8">
              <p className=" leading-relaxed">
                <span className="inline-flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Zero-setup environment
                </span>
              </p>
              <p className=" leading-relaxed">
                <span className="inline-flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Auto-save your work in the cloud
                </span>
              </p>
              <p className=" leading-relaxed">
                <span className="inline-flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Access from any device, anywhere
                </span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.codingchaskalab.com"
                className="btn btn-primary px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Start Coding Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              {/* <button
                  className="btn btn-outline px-8 text-lg hover:btn-accent transition-colors"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Watch Demo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                  </svg>
                </button> */}
            </div>

          </div>
        </div>
      </div>




      <div data-aos="fade-up" className="container max-w-none py-8 md:py-8">
        <div className="hero min-h-[60vh] rounded-2xl  to-primary/5">
          <div className="hero-content text-center p-8 md:p-12">
            <div className="max-w-2xl">
              {/* Animated floating stars background */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(15)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="absolute text-yellow-400 animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      fontSize: `${Math.random() * 20 + 10}px`,
                      animationDelay: `${i * 0.5}s`,
                      opacity: Math.random() * 0.5 + 0.3
                    }}
                  />
                ))}
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ">
                Loved by Students, <br className="hidden sm:block" />Rated Excellent on Google
              </h3>

              {/* Rating with animation */}
              <div className="flex flex-col items-center justify-center py-4 mb-8">
                <div className="flex mb-2" data-aos="zoom-in" data-aos-delay="200">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 mx-1 text-2xl md:text-3xl drop-shadow-sm animate-pop-in"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-lg md:text-xl font-semibold text-base-content">
                    5/5 from 110+ Reviews
                  </p>
                  <div className="w-full bg-base-200 rounded-full h-2.5 max-w-xs mx-auto">
                    <div
                      className="bg-yellow-400 h-2.5 rounded-full"
                      style={{ width: '100%' }}
                      data-aos="width-animation"
                      data-aos-duration="1000"
                    ></div>
                  </div>
                </div>
              </div>

              {/* Testimonial carousel would go here */}


              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.google.com/search?q=codingchaska"
                className="btn btn-primary btn-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Read More Reviews
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}
