import React from "react";
import Link from "next/link";
import { useAppContext } from "@/context/state";
import Program from "@/components/Program";
import Head from "next/head";

function ProgramsPage() {
    const mycontext = useAppContext();
    const data = mycontext.programs;

    const [programs, setPrograms] =  React.useState([]);
    const [count, setCount] = React.useState(0);
    const [next, setNext] = React.useState("");

    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        if (data){
          setPrograms(data.results);
          setNext(data.next);
          setCount(data.count);
          setLoading(false);
        };
    
    },[data]);

    return ( 
        <>
      <Head>
        <title>Job Ready Programs | Coding Chaska</title>
        <meta name="description" content="Learn Website Development, Frontend Development, Backend Development, Data Analytics, Data Science & Application Development from the industry expert and get a job" />
      </Head>

  <div className="container">
  <div className="text-sm breadcrumbs">
  <ul>
    <li>
      <Link href={"/"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Home
      </Link>
    </li> 

    <li>
      Programs
    </li>
  </ul>
</div>
<br />

{loading && 
<span className="loading loading-dots loading-sm"></span>
}

{(programs.length ===0 && !loading) &&
                <div className='text-center'>
                  <p>There is no program available</p>
                  <br />
                  <br />
                </div>
}

<div className="grid gap-4 grid-cols-1 md:grid-cols-3">

{programs.map((program, index) => (
                    <Program key={index} program={program}/>
    ))}

</div>
            </div>
        </>
     );
}

export default ProgramsPage;