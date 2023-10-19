import Head from "next/head";
import Link from "next/link";

function Profile(){


    return (
        <>
     <Head>
        <title>Profile | Coding Chaska </title>
        <meta name="description" content="Login to Coding Chaska and start your journey of learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robots" content="noindex" />
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
                Profile
            </li>
        </ul>
        </div>


        <div className="my-10">
            <p>We are working on this page..</p>
        </div>



      </div>
        
        </>
    )
}


export default Profile;