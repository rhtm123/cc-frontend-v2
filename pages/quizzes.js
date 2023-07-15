import Quiz from "@/components/Quiz";
import Link from "next/link";
import React from "react";
import Head from "next/head";

function QuizzesPage() {

    const [loading, setLoading] = React.useState(true);
    const [mcqs, setMcqs] = React.useState([]);
    const [next, setNext] = React.useState();
    const [loadingMore, setLoadingMore] = React.useState(false);


    const loadMore = () => {
        setLoadingMore(true);
        fetch(next)
        .then(async (response) => {
          if (response.ok) {
            let data1 = await response.json();
            // console.log(data1);
            setMcqs((oldArray) => [...oldArray, ...data1.results])
            setNext(data1.next);
            setLoadingMore(false);
           } else {
            setLoadingMore(false);
          }
        }).catch(error=>{ console.log("error happend") }) 
      }

    const getquizzess = () => {
        let url = process.env.API_URL + `quiz/quiz_list/?ordering=-created&creator=&is_published=true&allowed_to=0`;
        fetch(url)
        .then(async (response) => {
          if (response.ok) {
            let data1 = await response.json();
            setMcqs(data1.results);
            setNext(data1.next);
            setLoading(false);
           } else {
          }
        }).catch(error=>{  }) 
}

React.useEffect(() => {
    getquizzess();
  }, []);


    return ( 
        <>
      <Head>
        <title>Solve MCQs (Multiple Choice Questions) | Coding Chaska</title>
        <meta name="description" content="MCQ questions, Quizzes, Quiz on Python, HTML, CSS, JavaScript, React, Django, Database, SQL" />
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
      MCQ Quizzes
    </li>
  </ul>
</div>
<br />


{loading && 
<span className="loading loading-dots loading-sm"></span>
}

<div className="grid gap-4 grid-cols-1 md:grid-cols-3">

{mcqs.map((quiz, index) => (
                    <Quiz key={index} quiz={quiz} />
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

export default QuizzesPage;