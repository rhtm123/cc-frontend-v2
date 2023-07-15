import React from "react";

import Error404 from "@/components/Error404";
import Link from "next/link";

import Lessons from "@/components/Lessons";
import SolveQuiz from "@/components/SolveQuiz";

import Head from "next/head";

function LessonPage({data, error}) {

    const [course, setCourse] = React.useState({});
    const [topics, setTopics] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const [nextPrevious, setNextPrevious] = React.useState();

    const getNextPrevious = () =>{
        let url = process.env.API_URL+'lesson/next_previous_lesson/'+data.id+"/";
        fetch(url)
        .then(async (response) => {
          if (response.ok) {
            var data3 = await response.json();
            // console.log(data3);
            setNextPrevious(data3);
           } else {
            var error = await response.json();
          }
        })
        
    }

    const loadTopics = (id) => {
        let url = process.env.API_URL + `lesson/topics/?course=${id}&ordering=order`
        fetch(url)
        .then(async (response) => {
          if (response.ok) {
            var data = await response.json();
            setTopics(data.results);
  
           } else {
            
          }
        }).catch(error=>{  })
    }

    const loadCourse = ()=> {
  
        if (!error){
        let url = process.env.API_URL + 'course/course/'+data.topic.course+"/";
        fetch(url)
        .then(async (response) => {
          if (response.ok) {
            var data = await response.json();
            setCourse(data);
            loadTopics(data.id);
           } else {
            
          }
        }).catch(error=>{  })
    
    }
    
      }
    
      React.useEffect(() => {
        getNextPrevious();
        loadCourse();
      }, [data.id]);


    if (error) return <Error404 />;

    return ( 
        <>
        <Head>
        <title>{data.name} - Coding Chaska</title>
        <meta name="description" content={data?.detail.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* <meta name="robots" content="noindex" /> */}
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
      <Link href={"/course/"+course?.slug}>
        Course Page
      </Link>
    </li>
    <li>
      {data.name}
    </li>
  </ul>
</div>

<br />
        
        <div className="md:flex md:gap-6">
        <div className="md:w-1/3">
        <ul className="menu bg-base-200 rounded-box">
    {topics.map((topic, index) => 
    
    <li>
        <details open={topic.id==data.topic.id?true:false}>
        <summary>{topic.name}</summary>
        
        <Lessons topic={topic} currentLesson={data} />
        </details>
    </li>
    
    
    
    )}
    
    </ul>
        </div>
        <div className="md:w-2/3">

        <article className="prose max-w-none m-auto">


             {(data.lesson_type===0 && data.video_link) &&
                        <div className='youtubeContainer'>
                            <iframe className='youtubeVideo' src={data.video_link+"?title=0&byline=0&portrait=0"} frameBorder="0" allowFullScreen></iframe>
                        </div>
            }

            {!data.quiz && <div className="" >
                        <h2 className="mt-0">{data.name}</h2>

                        <div  dangerouslySetInnerHTML={{ __html: data.detail }}></div>
            </div> }

            {data.quiz && <div>

                        <SolveQuiz quiz={data.quiz} />
                        <br />
                        <br />
                    </div>

            }


        </article>

        <div className="join grid grid-cols-2">
        {nextPrevious?.previous_lesson && <Link className="join-item btn btn-outline" href={"/lesson/"+nextPrevious.previous_lesson.slug}><button >Previous Lesson</button></Link>}
        {nextPrevious?.next_lesson && <Link className="join-item btn btn-outline" href={"/lesson/"+nextPrevious.next_lesson.slug}> <button >Next Lesson</button></Link>}
        </div>

        </div>
        </div>
        </div>
        </>
     );
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const {slug} = context.params;
    const url = process.env.API_URL+"lesson/lesson/"+slug;
  
    const res = await fetch(url)
    const error = res.ok ? false : true
    const data = await res.json()
  
    return { 
        props: { 
            data:data, error:error
        }
    }
  }

export default LessonPage;