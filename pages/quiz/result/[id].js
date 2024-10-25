
import React from "react";
import Error404 from "@/components/Error404";
import Link from "next/link";
// import SolveQuiz from "@/components/SolveQuiz";
import Head from "next/head";
import QuizResult from "@/components/QuizResult";

function QuizPage({data,error}) {

    if (error) return (<Error404 />)

    // console.log(data)

    return ( 
        <>
    <Head>
        <title>{data.quiz.name} Result</title>
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
      {data.quiz.name} result
    </li>
  </ul>
</div>
<br />


        <div className="md:w-7/12 prose max-w-none m-auto">
            {/* <p className="py-4">I solved {data.quiz.name}.  </p> */}
            <QuizResult questions={data.response?.questions} total_correct={data?.response.rightCount} timeTaken={data?.response.timeTaken} />
        </div>

        </div>
           
        </>
     );
}


export async function getServerSideProps(context) {
    // Fetch data from external API
    const {id} = context.params;
    const url = process.env.API_URL+"quiz/user_quiz/"+id+"/";
  
    const res = await fetch(url)
    const error = res.ok ? false : true
    const data = await res.json()
    // console.log(data);
  
    return { 
        props: { 
            data:data, error:error
        } 
  
    }
}

export default QuizPage;