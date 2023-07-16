import React from "react";
import { postData } from "@/utils/auth";

function JoinNow({courseName, purpose="join_course"}) {

    const [showpopup, setShowpopup] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [msgSent, setMsgSet] = React.useState(false);
    const [error, setError] = React.useState(false);


    const handleClick = () => {
        var url = process.env.API_URL + 'auth/contact-us/';
    
        postData(url, {email: email, name: name, message:`${mobile} ${name} wants to join ${courseName}`, subject:`${name}`})
          .then(data => {
            setEmail("");setName("");setMobile("");
            setMsgSet(true);
        }).catch(error => {
            setError(error);
            console.log(error);
        });
    
        var url1 = process.env.API_URL + "auth/contactsubscribers/";
        postData(url1, {
            email: email, mobile: mobile,
            short_msg:`${name} wants to learn ${courseName}`,
            purpose:purpose,
        }).then(data => {
            console.log(data);
        }).catch(error => {
            // setError(error);
            console.log(error);
        })
    }

    return ( 
        <>

<button className="btn w-full" onClick={()=>window.my_modal_3.showModal()}>Request Demo Class</button>
<dialog id="my_modal_3" className="modal">
  <div method="dialog" className="modal-box">
    
<form method="dialog" className="model-box">
<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>


<div className="mb-4 form-control w-full">
<label className="label">
    <span className="label-text">Name:</span>
</label>
<input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />

{error.name && <label className="label">
    <span className="label-text-alt text-error">{error.name}</span>
  </label> 
}
</div>

<div className="mb-4 form-control w-full">
<label className="label">
    <span className="label-text">Email:</span>
</label>
<input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Type here" className="input input-bordered w-full" />

{error.email && <label className="label">
    <span className="label-text-alt text-error">{error.email}</span>
  </label> 
}
</div>

<div className="mb-4 form-control w-full">
<label className="label">
    <span className="label-text">Mobile:</span>
</label>
<input value={mobile} onChange={e=>setMobile(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
{error.mobile && <label className="label">
    <span className="label-text-alt text-error">{error.mobile}</span>
  </label> 
}
</div>

{!msgSent && <div className="text-center">
    <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
</div>}

</form>

{msgSent && <p className="text-success">Thank You for showing your interest. Our team will contact you soon.</p>}



  </div>

  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
  
</dialog>
        
        </>
     );
}

export default JoinNow;