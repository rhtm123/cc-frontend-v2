import React from "react";
import Link from "next/link";
import { postData } from "@/utils/auth";
import Head from "next/head";

function ContactPage() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [msg, setMsg] = React.useState("");

    const [msgSent, setMsgSet] = React.useState(false);
    const [error, setError] = React.useState(false);


    const handleClick = () => {
        var url = process.env.API_URL + 'auth/contact-us/';

        postData(url, {email: email, name: name, message:msg, subject:"Mobile"+mobile})
          .then(data => {
            setEmail("");setMsg("");setName("");setMobile("");
            setMsgSet(true);
        }).catch(error => {
            setError(error);
            console.log(error);
        })
    
    }


    return ( 
        <>
      <Head>
        <title>Contact | Coding Chaska</title>
        <meta name="description" content="Want to learn Programming, Python, Website Development, Data Science? Feel free to contact us. We look forward to hearing from you" />
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
      About
    </li>
  </ul>
</div>

<br />

<div className="md:flex md:gap-6">
        <div className="md:w-1/3">

        <h1 className="text-2xl bold">Points of Contact</h1>

        <br />
        <div class="">
              
              <div class="grow">
                <p class="mb-1 font-bold">
                  Support
                </p>
                <p class="">
                  codingchaska.info@gmail.com
                </p>
                <p class="">
                  +91 9518901902
                </p>
              </div>
            </div>


          <br />
            <div class="">
              
              <div class="grow">
                <p class="mb-1 font-bold">
                  Addresses
                </p>
                <p class="">
                  005/3, Jai Vijay Nagar Building
                </p>
                <p class="">
                  Oppsite Seven Square School
                </p>
              </div>
            </div>



        </div>

        <div className="md:w-2/3 prose">

        <h2>Feel free to fill out the form below. We look forward to hearing from you</h2>
<form>

<div className="mb-4 form-control w-full">
<label className="label">
    <span className="label-text">Name:</span>
</label>
<input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="name" className="input input-bordered w-full" />

{error.name && <label className="label">
    <span className="label-text-alt text-error">{error.name}</span>
  </label> 
}
</div>

<div className="mb-4 form-control w-full">
<label className="label">
    <span className="label-text">Email:</span>
</label>
<input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered w-full" />

{error.email && <label className="label">
    <span className="label-text-alt text-error">{error.email}</span>
  </label> 
}
</div>

<div className="mb-4 form-control w-full">
<label className="label">
    <span className="label-text">Mobile:</span>
</label>
<input value={mobile} onChange={e=>setMobile(e.target.value)} type="text" placeholder="mobile" className="input input-bordered w-full" />
{error.mobile && <label className="label">
    <span className="label-text-alt text-error">{error.mobile}</span>
  </label> 
}
</div>

<div className="mb-4 form-control w-full">
<label className="label">
    <span className="label-text">Message:</span>
</label>
<textarea value={msg} onChange={(e)=>setMsg(e.target.value)} name="message"  className="textarea textarea-bordered" placeholder="Message"></textarea>

{error.message && <label className="label">
    <span className="label-text-alt text-error">{error.message}</span>
  </label> 
}
</div>

{!msgSent && <div className="text-center">
    <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
</div>}

</form>


{msgSent && <p className="text-success">Thank You for sending your message. Our team will contact you soon.</p>}

    

        </div>
</div>
<div className="md:w-3/4 prose max-w-none m-auto">




</div>



            </div>
        </>
     );
}

export default ContactPage;