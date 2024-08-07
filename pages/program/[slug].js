import Link from "next/link";
import React from "react";
import JoinNow from "@/components/JoinNow";
import Error404 from "@/components/Error404";
import Head from "next/head";

function ProgramPage({data, error}) {

    const [activeTab, setActiveTab] = React.useState("overview");
    const [courses, setCourses] = React.useState([]);

    const getCourses = () => {
        let url = process.env.API_URL + 'course/program_courses/?course=&program='+data.id;
        fetch(url)
        .then(async (response) => {
          if (response.ok) {
            let data = await response.json();
            setCourses(data);
            // console.log(data);
           } else {
            
          }
        }).catch(error=>{  })
    
      }
    
      React.useEffect(() => {
        getCourses();
      },[data]);

    if (error) return (<Error404 />)

    return ( 
        <>
<Head>
        <title>{data.name} - Coding Chaska</title>
        <meta name="description" content={data.detail.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />

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
      <Link href={"/programs"}>
        Programs
      </Link>
    </li> 
    <li>
      {data.name}
    </li>
  </ul>
</div>

<br />

<div className="tabs">
  <button onClick={()=>setActiveTab("overview")} className={activeTab=="overview"?"tab font-bold tab-active tab-lifted":"tab tab-lifted"}>Overview</button> 
  <button onClick={()=>setActiveTab("curriculam")} className={activeTab=="curriculam"?"tab font-bold tab-active tab-lifted":"tab tab-lifted"}>Curriculam</button> 
</div>

<div className="grid md:grid-cols-3 gap-4">
<div className="col-span-2">
<div className="prose max-w-none m-auto">

{activeTab=="overview" && 
<div className="py-4">
    <div  dangerouslySetInnerHTML={{ __html: data.detail }}></div>

</div>
}

{activeTab=="curriculam" && 
<div>
    {courses.map((course, index) =>
<details className="mt-6 collapse collapse-plus bg-base-200">
<summary className="collapse-title font-medium">{course.course.name}</summary>
<div className="collapse-content"> 
<div  dangerouslySetInnerHTML={{ __html: course.course.content }}></div>

</div>
</details>


    )}





</div>
}

</div>



</div>
<div >



<div className="card shadow-l">
  <div className="card-body">
    <div className="card-actions">

      <JoinNow courseName={data.name} purpose="join_program" />
      {/* <button data-aos="fade" className="btn btn-primary ">Join Now</button> */}
      
      <div className="footer pt-4 items-center">
    <p>Share the Program: </p>
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a target="_blank" href={"https://twitter.com/intent/tweet?text="+data.name} rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a> 
    <a  target="_blank" href={"https://www.linkedin.com/sharing/share-offsite/?url=https://www.codingchaska.com/live-course/"+data.slug} rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https://www.codingchaska.com/live-course/"+data.slug} rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
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
    const url = process.env.API_URL+"course/program/"+slug;

    const res = await fetch(url)
    const error = res.ok ? false : true
    const data = await res.json()
  
    return { 
        props: { 
            data:data, error:error
        } 

    }
  }

export default ProgramPage;