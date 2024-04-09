import Link from "next/link";
import Head from "next/head";
function TermsOfServicePage() {
    return ( 
        <>
        <Head>
        <title>Coding Chaska | Terms of Service </title>
        <meta name="description" content="Read the Terms of Service of Learning Setu Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

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
      Terms of Service
    </li>
  </ul>
</div>


<br />
<article className="md:w-3/4 prose max-w-none m-auto">


    
<div className="content">

<h3 className="title">Our website</h3>

<p>Our website address is: https://www.codingchaska.com</p>

<h3 className="title">Definitions of basic terms, rights and restriction:</h3>

<h4>Basic terms</h4>

<p>These Terms of Service for Learning Setu Pvt Limited constitute a binding contract between you (“Member” or “Customer” or “You”) and company (Learning Setu Private Limited), regarding the terms under which the Company will provide You with access to our services purchased by You.</p>

<h4>Rights & restrictions</h4>

<ol>
    <li>Members are granted a time-limited, non-exclusive, revocable, nontransferable, and non-sublicenseable right to access that portion of the course corresponding to the purchase.</li>
    <li>The portion of the course corresponding to the purchase will be available to the Member as long as the course is maintained by the Company, which will be a minimum of one year after Member’ purchase.</li>
    <li>The videos in the course are provided as a video stream and are not downloadable.</li>
    <li>By agreeing to grant such access, the Company does not obligate itself to maintain the course, or to maintain it in its present form.</li>
</ol>
</div>


</article>


        </div>    
        </>
     );
}

export default TermsOfServicePage;