import Error404 from "@/components/Error404";

import Head from "next/head";
// import Image from "next/image";

import Link from "next/link";

function QuickTutorialPage({data, error}) {

    if (error) {
        return (<Error404 />)
    }

    let title = data.header + " | Coding Chaska";
    
    return ( 
        <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={data.sub_header.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="image" content={data.feature_img} />

        {/* <!-- Schema.org for Google --> */}
<meta itemProp="name" content={data.header} />
<meta itemProp="description" content={data.sub_header.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />
<meta itemProp="image" content={data.feature_img} />

        {/* Facebook  */}
        <meta property="og:title"         content={data.header} />
        <meta property="og:description"   content={data.detail.replace( /(<([^>]+)>)/ig, '').slice(0,120)} />
        <meta property="og:image"         content={data.feature_img} />

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
      <Link href={"/quick-tutorials"}>
        Quick tutorials
      </Link>
    </li> 
    <li>
      {data.header}
    </li>
  </ul>
</div>

<br />
<article className="md:w-3/4 prose max-w-none m-auto">


    <img 
    src={data.feature_img} 
    className="w-full"
    alt={data.header}
    />

    <br />

    <h1 className="">{data.header}</h1>
    <h4 className=''>{data.sub_header}</h4>

    <br />

    <div dangerouslySetInnerHTML={{ __html: data.detail }}></div>
  

    

</article>

</div>

            
        </>
     );
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const {slug} = context.params;
    const url = process.env.API_URL+"short-tutorial/short-tut/"+slug;

    // console.log(url);

    const res = await fetch(url)
    const error = res.ok ? false : true
    const data = await res.json()
  
    return { 
        props: { 
            data:data, error:error
        } 

    }
  }

export default QuickTutorialPage;