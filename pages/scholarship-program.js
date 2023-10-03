import React from "react";
import { postData } from "@/utils/auth";
import Head from "next/head";

function ScholarshipProgram () {

    const [name, setName] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [schoolName, setSchoolName] = React.useState("");

    const [msgSent, setMsgSet] = React.useState(false);
    const [error, setError] = React.useState(false);


	useEffect(() => {
		// Event snippet for Website lead conversion page
		gtag('event', 'conversion', {
		  'send_to': 'AW-876457015/iKaNCNDJkugYELfY9qED'
		});
	  }, []);


    const handleClick = () => {
        var url = process.env.API_URL + 'auth/contact-us/';
        let email = "no email"
        let subject = "Scholarship Mobile "+mobile; 
        let msg = "Scholarship contact - " + mobile + " School Name - " + schoolName; 
        postData(url, {email: email, name: name, message:msg, subject:subject})
          .then(data => {
            setName("");setMobile(""); setSchoolName("");
            setMsgSet(true);
        }).catch(error => {
            setError(error);
            console.log(error);
        })
    
    }



    return (
    <>
	<Head>
		<title>Scholarship Program | Coding Chaska</title>
		<meta name="description" content="Earn Scholarships: Take Our Test & Get Discounts on Computer Basics Course" />

	</Head>
        <div className="space-y-8 md:space-y-16">


	<section className="">
		<div className="container max-w-none grid md:grid-cols-2 flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
			<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
				<h1 className="text-5xl font-bold sm:text-6xl">Coding Chaska's 
					<span className="text-primary"> Scholarship</span> Program
				</h1>
				<p className="mt-6 mb-8 text-lg sm:mb-12">Excel in our scholarship and unlock the possibility of receiving a discount of up to 100% on our Computer Basics (Computer 101) Course.
				</p>
				<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
					<a rel="noopener noreferrer" href="#scholarshipform" className="btn btn-primary">Apply Now</a>
				</div>
			</div>
			<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="/images/scholarship/rocket.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " />
			</div>
		</div>
	</section>



	<section className="bg-base-200">
		<div className="container max-w-none py-24 mx-auto space-y-12">
			<div>
                <p className="text-center dark:text-gray-400">HOW CAN YOU JOIN IT</p>
				<h2 className="text-3xl font-bold tracki text-center sm:text-5xl ">Follow Simple Steps</h2>

			</div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
					<img src="/images/scholarship/achievement.png" alt="" className="mx-auto rounded-lg " />
				</div>

                <div>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded text-base-100 bg-primary">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi ">Fill up your form</h4>
								<p className="mt-2">
Please provide your name, mobile number, and school name, and submit this information to us. Our team will contact you.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded text-base-100 bg-primary">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium">Visit Coding Chaska </h4>
								<p className="mt-2">
                                The next step is to visit our Coding Chaska offline institute, where your test will be scheduled and conducted.
                                </p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded text-base-100 bg-primary">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium">Complete test & Get Scholarship</h4>
								<p className="mt-2">
                                You are required to attempt all 15 multiple-choice questions (MCQs) in order to be eligible for the scholarship.
                                </p>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	</section>
	

	<div id="scholarshipform" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
		<div className="flex flex-col justify-between">
			<div className="space-y-2">
				<h2 className="text-4xl font-bold leadi lg:text-5xl">Fill up your form </h2>
				<div className="dark:text-gray-400">Don't miss it</div>
			</div>
			<img src="https://mambaui.com/assets/svg/doodle.svg" alt="Contact our customer support" className="p-6 h-52 md:h-64" />
		</div>
		<form novalidate="" className="space-y-6">
			<div>
				<label for="name" className="text-sm">Full name</label>

<input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Your name here" className="input input-bordered w-full" />

{error.name && <label className="label">
    <span className="label-text-alt text-error">{error.name}</span>
  </label> 
}			</div>
			

            <div>
				<label for="mobile" className="text-sm">Mobile</label>
                <input value={mobile} onChange={e=>setMobile(e.target.value)} type="text" placeholder="Your mobile here" className="input input-bordered w-full" />
                {error.mobile && <label className="label">
                    <span className="label-text-alt text-error">{error.mobile}</span>
                </label> 
                }
            </div>


            <div>
				<label for="school" className="text-sm">School Name</label>
                <input value={schoolName} onChange={e=>setSchoolName(e.target.value)} type="text" placeholder="Your School here" className="input input-bordered w-full" />
                {error.schoolName && <label className="label">
                    <span className="label-text-alt text-error">{error.schoolName}</span>
                </label> 
                }
            </div>
            {!msgSent &&
			<button type="button" onClick={handleClick} className="w-full p-3 text-sm font-bold btn btn-primary">Submit</button>
            }

<br />
        {msgSent && <p className="text-success">Thank You for sending your message. Our team will contact you soon.</p>}

		</form>
        

	</div>

    <hr /> 
    
	<section className="">
		<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
			<p className="p-2 text-sm font-medium tracki text-center uppercase">How it works</p>
			<h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
			<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
				<div>
					<h3 className="font-semibold">Who qualifies for eligibility in this scholarship test?</h3>
					<p className="mt-1 dark:text-gray-400">All school kids are eligible to participate in this test.</p>
				</div>
				<div>
					<h3 className="font-semibold">How many times can I participate in the scholarship test?</h3>
					<p className="mt-1 dark:text-gray-400">You may participate in the test only once per month.</p>
				</div>

                
				<div>
					<h3 className="font-semibold">Can I participate from my home? </h3>
					<p className="mt-1 dark:text-gray-400">No. You must come to Coding Chaska's institute to participate in the test.</p>
				</div>

                
				<div>
					<h3 className="font-semibold">What types of questions will be asked in the test?</h3>
					<p className="mt-1 dark:text-gray-400">The test will consist of 15 questions covering topics in general aptitude and general knowledge</p>
				</div>

                <div>
					<h3 className="font-semibold">Which course will I be eligible for discounts if I excel in the scholarship test? </h3>
					<p className="mt-1 dark:text-gray-400">Your exceptional performance in the scholarship test can lead to discounts on select courses, including our Computer Basics (Computer 101) Course.</p>
				</div>

				<div>
					<h3 className="font-semibold">Can I use the Internet during the test? </h3>
					<p className="mt-1 dark:text-gray-400">No, the use of the Internet is not permitted during the test.</p>
				</div>
				
			</div>
		</div>
	</section>
	
</div>
	</>
    )
}

export default ScholarshipProgram;