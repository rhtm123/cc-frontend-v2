import React from "react";
import Link from "next/link";
import JoinNow from "@/components/JoinNow";
import Head from "next/head";
import Error404 from "@/components/Error404";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import { BsFacebook } from "react-icons/bs";



function LiveCoursePage({data, error}) {

    const [activeTab, setActiveTab] = React.useState("overview");

    
    if (error){return(<Error404 />)}
    return ( 
        <>

<Head>
          <title>{data.name} - Coding Chaska</title>
        <meta name="description" content={data.overview.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />

        <meta name="image" content={data.image} />

        {/* <!-- Schema.org for Google --> */}
<meta itemProp="name" content={data.name} />
<meta itemProp="description" content={data.overview.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />
<meta itemProp="image" content={data.image} />

        {/* Facebook  */}
        <meta property="og:title"         content={data.name} />
        <meta property="og:description"   content={data.overview.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />
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
      <Link href={"/live-courses"}>
        Live Courses
      </Link>
    </li> 
    <li>
      {data.name}
    </li>
  </ul>
</div>


<div class="grid md:grid-cols-2 gap-4 py-4">
  <div>
  <img src={data.image} className="rounded-lg" />
  </div>

  <div className="flex flex-col	justify-center">
    <h1 className="text-4xl">{data.name}</h1>
    <p className="pt-2 ">Offered by: <span className="font-medium opacity-80">Coding Chaska </span></p>
    <p className="pt-0 ">Course type: <span className="font-medium opacity-80">{data.course_type} </span></p>
    <p className="pt-0 ">Difficulty level: <span className="font-medium opacity-80">{data.difficult_level} </span></p>
    


  </div>

</div>


<div className="tabs tabs-boxed">
  <a onClick={()=>setActiveTab("overview")} className={activeTab=="overview"?"tab tab-active":"tab"}>Overview</a> 
  <a onClick={()=>setActiveTab("curriculam")} className={activeTab=="curriculam"?"tab tab-active":"tab"}>Curriculam</a> 
</div>

<div className="grid md:grid-cols-3 gap-4">
<div className="col-span-2">
<article className="prose max-w-none m-auto">

{activeTab=="overview" && 
<div className="mt-4">
    <div className="bg-base-200 card px-4" dangerouslySetInnerHTML={{ __html: data.overview }}></div>
</div>
}

{activeTab=="curriculam" && 
<div  className="mt-4">

<div className="bg-base-200 card px-4" dangerouslySetInnerHTML={{ __html: data.content }}></div>
</div>
}

</article>

</div>
<div >



<div className="mt-4">
  <div className="bg-base-200 card p-4">
    <div className="card-actions">

      <JoinNow courseName={data.name} purpose="join_course" />
      {/* <button className="btn btn-primary ">Join Now</button> */}
      
    <div className="footer pt-4 items-center">
    <p>Share the course: </p>
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a target="_blank" href={"https://twitter.com/intent/tweet?text="+data.name} rel="noopener noreferrer">
      
      <BsTwitterX size={24} />
      
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg> */}
    </a> 
    <a  target="_blank" href={"https://www.linkedin.com/sharing/share-offsite/?url=https://www.codingchaska.com/live-course/"+data.slug} rel="noopener noreferrer">
      <BsLinkedin size={24} />
      
      </a>
    <a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https://www.codingchaska.com/live-course/"+data.slug} rel="noopener noreferrer">

        <BsFacebook size={24} />
    </a>
  </div>
</div>


    </div>
  </div>
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
    const url = process.env.API_URL+"course/course/"+slug;
  
    
    const res = await fetch(url)
    // console.log(res)
    const error = res.ok ? false : true
    const data = await res.json()
  
    // console.log(data);
    return { 
        props: { 
            data:data, error:error
        } 
  
    }
  }

export default LiveCoursePage;