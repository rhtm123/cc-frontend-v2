import Head from "next/head"


export default function Home() {
  return (
    <>
    <Head>
        <title>Home | Coding Chaska </title>
        <meta name="description" content="Learn Website Development, Frontend Development, Backend Development, Data Science, Python JavaScript & App Development from the industry expert" />
      </Head>
    <div className="container">
 <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/images/about/about03/about-us-03-image-01.png" className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Coding Chaska's Programs</h1>

      <p className="py-6">Join our <strong>Online Learning Platform</strong> and avail benefits of Job-Ready Programs at a reasonable free. Get expert assistance from our experienced trainers and mentors at every step in your journey. </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/images/others/home-5-image-01.png" className="max-w-sm rounded-lg" />
    <div>
    
      <h1 className="text-5xl font-bold">Coding Chaska's Courses</h1>
      <p className="py-6">We have created self-paced online courses where you can advance your programming skills. These interactive courses contain a lot of problems, assignments & mini projects</p>

      <button className="btn btn-primary">Live Courses</button>
      <button className="ml-4 btn btn-primary">Self Paced Courses</button>

    </div>
  </div>
</div>

<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/images/intro/coding_problem.png" className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Quizzes & Coding Problems</h1>


      <p className="py-6">We have created coding problems that will help you to improve you programming logic. It contains all types of problems for a beginner to an advanced coder.</p>      <button className="btn btn-primary">Quizzes</button>
      <button className="ml-4 btn btn-primary">Coding Problems</button>

    </div>
  </div>
</div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/images/intro/cc_editor.png" className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Write Code Online</h1>
      <p className="py-6">We have built our Online Editor where you can code without installing anything. Just register and start coding. Your works will be saved in your account.</p>

      <button className="btn btn-primary">Start Now</button>
    </div>
  </div>
</div>


<div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-4xl font-bold">We are highly rated on Google Reviews</h1>
      <br />

      <div className='text-center'>
      {/* <a href='https://www.google.com/search?q=coding+chaska'>
      </a> */}

  </div>

      <button className="btn btn-primary">Search on Google</button>
    </div>
  </div>
</div>

    </div>
    </>
    )
}
