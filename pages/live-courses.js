import Link from "next/link";
import { useAppContext } from "@/context/state";
import React from "react";
import LiveCourse from "@/components/LiveCourse";
import Head from "next/head";

function LiveCoursesPage() {

    const [loading, setLoading] = React.useState(true);
    const [courses, setCourses] = React.useState([]);
    const [next, setNext] = React.useState();
    // const { data: session } = useSession();
    // const [user, setUser] = React.useState();

    const mycontext = useAppContext();
    const data = mycontext.livecourses;


    React.useEffect(() => {
      if (data){
        setCourses(data.results);
        setLoading(false);
        setNext(data.next);
      };
    
    },[data]);


    return ( 
        <>
    <Head>
        <title>Live Tech Courses | Coding Chaska</title>
        <meta name="description" content="Dive into interactive learning with our live online & Offline tech courses. Master Computer Basics, React, JavaScript, Python, Django, HTML & CSS. Join our live classes and accelerate your tech career." />
    </Head>

<div className="container max-w-none">

          <div className="text-sm breadcrumbs">
  <ul>
    <li>
      <Link href={"/"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Home
      </Link>
    </li> 
   
    <li>
      Live Courses
    </li>
  </ul>
</div>


<div className="py-4">
<h1 className="font-bold md:text-3xl text-xl">Learn Live with Our Tech Experts</h1>
<p className="opacity-90">Engage in live, interactive sessions with experienced instructors. Gain hands-on practice, ask questions in real-time, and network with fellow learners. Accelerate your skill development and boost your tech career prospects with our comprehensive live tech courses.</p>
</div>

{loading && 
<span className="loading loading-dots loading-sm"></span>
}


{(courses.length ===0 && !loading) &&
                <div className='text-center'>
                  <p>There is no course available</p>
                  <br />
                  <br />
                </div>
}

<div className="grid gap-4 grid-cols-1 md:grid-cols-3">

{courses.map((course, index) => (
                    <LiveCourse key={index} course={course}/>
    ))}

</div>

</div>

        </>
     );
}

export default LiveCoursesPage;