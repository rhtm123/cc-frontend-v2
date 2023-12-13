import { useAppContext } from "@/context/state";
import React from "react";
import QuickTutorialCard from "@/components/QuickTutorialCard";
import Link from "next/link";
import Head from "next/head";



function QuickTutorialsPage() {
    // console.log(process.env)
    const mycontext = useAppContext();
    const data = mycontext.tutorials;
    // console.log(mycontext);

    const [loading, setLoading] = React.useState(true);
    const [tutorials, setTutorials] = React.useState([]);
    const [next, setNext] = React.useState();
    const [loadingMore, setLoadingMore] = React.useState(false);


    React.useEffect(() => {
      if (data){
        console.log(data);
        setTutorials(data.results);
        setLoading(false);
        setNext(data.next);
      };
    
    },[data]);

    const loadMore = () => {
      setLoadingMore(true);
      fetch(next)
      .then(async (response) => {
        if (response.ok) {
          let data1 = await response.json();
          // console.log(data1);
          setTutorials((oldArray) => [...oldArray, ...data1.results])
          setNext(data1.next);
          setLoadingMore(false);
         } else {
          setLoadingMore(false);
  
        }
      }).catch(error=>{ console.log("error happend") }) 
    }


    return ( 
      <>
      <Head>
        <title>Quick Tutorials | Coding Chaska  </title>
        <meta name="description" content="Quick tutorials, Blog Articles - Python, Django, Website development, Html, CSS, JavaScript, Reactjs, Nextjs" />
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
      Quick Tutorials
    </li>
  </ul>
</div>

<br />

{tutorials.length==0 && 
<span className="loading loading-dots loading-sm"></span>
}

<div className="grid gap-4 grid-cols-1 md:grid-cols-3">



  
{tutorials.map((tutorial, index) => (
                    <QuickTutorialCard key={index} tutorial={tutorial} />
))}
</div>

{loadingMore && <span className="loading loading-dots loading-md"></span>}
{(next && !loadingMore && !loading) && <div className='text-center'>
<br />
<button onClick={()=>loadMore()} className='btn btn-secondary'>Load more</button>
 
 </div>}



            
        </div>
  </>
     );
}

export default QuickTutorialsPage;