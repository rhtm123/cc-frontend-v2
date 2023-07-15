import React from "react";


import Head from 'next/head'
import Link from 'next/link'


function CertificatePage() {
    const [search, setSearch] = React.useState("");
    const [error, setError] = React.useState({});
    const [certificate, setCertificate] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
        setLoading(true)
        let url = process.env.API_URL + "certificate/certificates/?certi_id="+search;
        fetch(url).then(async (res)=>{
            let data = await res.json();
            setLoading(false);
            if (data.count>0){
                setCertificate(data.results[0])
                setError({})
            } else {
                setCertificate();
                setError({"search":"No Certificate available for given id"})
            }
        })
        console.log("this is called ")
    }


  React.useEffect(() => {
  }, []);


    return ( 
        <>
      <Head>
        <title>Coding Problems - Coding Chaska</title>
        <meta name="description" content="Solve Coding Problems - Python Basics, Python Flow Control, Python Function, Object Oriented Programming" />
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
      Check Certificate
    </li>
  </ul>
</div>

<br />



                    <form method="post">

                    <div className="">
                        <label className="label">
                            <span className="label-text">Write certificate id here: </span>
                        </label>
                        <input value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder="certi_id" name="name" className="input input-bordered input-info w-full max-w-xs" />
                        <button type="button" onClick={handleClick} className="ml-4 btn btn-primary">Submit</button>


                    </div>
                    {error.search && <p className='text-danger'>{error.search}</p>}


  
                    </form>


                    <br />

                    {loading && <p>laoding...</p>}

                    {certificate && <div className="prose">
                        <h3>Certificate found</h3>
                        <p>Student Name : {certificate.student.firstname} <br />
                        {certificate.course && <span>Course Name : {certificate.course.name}</span>}
                        {certificate.program && <span>Program Name : {certificate.program.name}</span>}
                        <br />
                        <span>Type: {certificate.type}</span> <br />
                        <span>Certificate image: <a rel="noreferrer" target="_blank" href={certificate.image}>Click</a></span>

                        </p>
                        
                    </div>}


        </div>
        
        </>
     );
}

export default CertificatePage;