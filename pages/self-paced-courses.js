import React from "react";
import { useAppContext } from "@/context/state";
import Course from "@/components/Course";

function SelfPacedCoursesPage() {

    const [loading, setLoading] = React.useState(true);
    const [courses, setCourses] = React.useState([]);
    const [next, setNext] = React.useState();

    const mycontext = useAppContext();
    const data = mycontext.selfpacedcourses;


    React.useEffect(() => {
      if (data){
        setCourses(data.results);
        setLoading(false);
        setNext(data.next);
      };
    
    },[data]);

    return ( 
        <>
        
        <div className="container">

        <div className="text-sm breadcrumbs">
  <ul>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Home
      </a>
    </li> 
   
    <li>
      Self Paced Courses
    </li>
  </ul>
</div>
<br />

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


<div className=" grid gap-4 grid-cols-1 md:grid-cols-3">

{courses.map((course, index) => (
                    <Course key={index} course={course}/>
    ))}

</div>


        </div>
        </>
     );
}

export default SelfPacedCoursesPage;