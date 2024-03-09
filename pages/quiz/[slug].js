
import React from "react";
import Error404 from "@/components/Error404";
import Link from "next/link";
import SolveQuiz from "@/components/SolveQuiz";
import Head from "next/head";

function QuizPage({data,error}) {

    if (error) return (<Error404 />)

    return ( 
        <>
        <Head>
        <title>{data.name} MCQ Quiz</title>
        <meta name="description" content={data.detail.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="image" content={data.image} />

        {/* <!-- Schema.org for Google --> */}
<meta itemProp="name" content={data.name} />
<meta itemProp="description" content={data.detail.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />
<meta itemProp="image" content={data.image} />

        {/* Facebook  */}
        <meta property="og:title"         content={data.name} />
        <meta property="og:description"   content={data.detail.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />
        <meta property="og:image"         content={data.image} />

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
      <Link href={"/quizzes"}>
        MCQ Quizzes
      </Link>
    </li> 
    <li>
      {data.name}
    </li>
  </ul>
</div>
<br />

<br />


<div className="md:w-7/12 prose max-w-none m-auto">
      <SolveQuiz quiz={data} />
</div>

        </div>
           
        </>
     );
}


export async function getServerSideProps(context) {
    // Fetch data from external API
    const {slug} = context.params;
    const url = process.env.API_URL+"quiz/quiz/"+slug+"/";
  
    const res = await fetch(url)
    const error = res.ok ? false : true
    const data = await res.json()
  
    return { 
        props: { 
            data:data, error:error
        } 
  
    }
}

export default QuizPage;