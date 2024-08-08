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
      About
    </li>
  </ul>
</div>

<br />

<div className="md:flex md:gap-6">
        <div className="md:w-5/12">

        <h1 className="text-2xl bold">Point of Contact</h1>

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
                  +91 9518-90-1902, +91 9370-39-4747
                </p>
              </div>
            </div>


          <br />
            <div class="">
              
              <div class="grow">
                <p class="mb-1 font-bold">
                  Address
                </p>
                <p class="">
                005, Jay Vijay Nagar Building 3,
                Opposite Seven Square Academy School, Naigaon East, Maharashtra
                </p>
              </div>
            </div>

            <br />

            <div className="w-full border rounded-xl">


            <iframe className="w-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.141237962605!2d72.85877647402981!3d19.36303618190148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7955fc5b6f45d%3A0x9fe0324917bbbc9e!2sCoding%20Chaska%20(Computer%20Classes)!5e0!3m2!1sen!2sin!4v1696424627632!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <br />


        </div>

        <div className="md:w-7/12 md:pl-10 prose max-w-none">

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
    <button type="button" onClick={handleClick} data-aos="fade" className="btn btn-primary">Submit</button>
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