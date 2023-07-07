import React from "react";
import Link from "next/link";

function LiveCoursePage({data, error}) {

    const [activeTab, setActiveTab] = React.useState("overview");

    
    return ( 
        <>
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
      <Link href={"/live-courses"}>
        Live Courses
      </Link>
    </li> 
    <li>
      {data.name}
    </li>
  </ul>
</div>

<br />


<div className="tabs tabs-boxed">
  <a onClick={()=>setActiveTab("overview")} className={activeTab=="overview"?"tab tab-active":"tab"}>Overview</a> 
  <a onClick={()=>setActiveTab("curriculam")} className={activeTab=="overview"?"tab tab-active":"tab"}>Curriculam</a> 
</div>

<div className="grid md:grid-cols-3 gap-4">
<div className="col-span-2">
<article className="prose max-w-none m-auto">

{activeTab=="overview" && 
<div >
    <br />
    <div  dangerouslySetInnerHTML={{ __html: data.overview }}></div>

</div>
}

{activeTab=="curriculam" && 
<div><br />

<div  dangerouslySetInnerHTML={{ __html: data.content }}></div>
</div>
}

</article>

</div>
<div >
    
<div className="card shadow-l">
  <div className="card-body">
    <div className="card-actions text-center">
      <Link className="w-full" href=""><button className="btn btn-primary w-full">Join Now</button></Link>
      <div className="">Share this course</div>

    <div className="">
        <a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https://www.codingchaska.com/live-course/"+data.slug} rel="noopener noreferrer">Facebook</a>

        <a target="_blank" href={"https://twitter.com/intent/tweet?text="+data.name} rel="noopener noreferrer">Twitter</a>

        <a target="_blank" href={"https://www.linkedin.com/sharing/share-offsite/?url=https://www.codingchaska.com/live-course/"+data.slug} rel="noopener noreferrer">Linkedin</a>

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
    const error = res.ok ? false : true
    const data = await res.json()
  
    return { 
        props: { 
            data:data, error:error
        } 
  
    }
  }

export default LiveCoursePage;