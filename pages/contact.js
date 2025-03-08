import React from "react";
import Link from "next/link";
import { postData } from "@/utils/auth";
import Head from "next/head";
import Cookies from 'js-cookie';

function ContactPage() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [msg, setMsg] = React.useState("");
    const [honeypot, setHoneypot] = React.useState(""); // Honeypot field

    const [msgSent, setMsgSet] = React.useState(false);
    const [error, setError] = React.useState({}); // Updated error object
    const [captchaAnswer, setCaptchaAnswer] = React.useState(""); // Captcha answer
    const [captchaValid, setCaptchaValid] = React.useState(false); // Captcha validation
    const [submitting, setSubmitting] = React.useState(false); // Submitting

    React.useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        // Simple captcha: a math question
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        setCaptchaAnswer(`${num1 + num2}`);
        setCaptchaValid(false);
    };

    const validateForm = () => {
        let formValid = true;
        const newErrors = {};

        // Check if required fields are empty
        if (!name.trim()) {
            newErrors.name = "Name is required.";
            formValid = false;
        }
        if (!email.trim()) {
            newErrors.email = "Email is required.";
            formValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email address.";
            formValid = false;
        }
        if (!mobile.trim()) {
            newErrors.mobile = "Mobile number is required.";
            formValid = false;
        }
        if (!msg.trim()) {
            newErrors.message = "Message is required.";
            formValid = false;
        }
        if (!captchaValid) {
            newErrors.captcha = "Captcha answer is incorrect.";
            formValid = false;
        }

        setError(newErrors);
        return formValid;
    };

    const handleClick = (e) => {
        e.preventDefault();
        // setSubmitting(true);

        // Honeypot check: If honeypot is filled, it's likely a bot
        if (honeypot !== "") {
            setError({ msg: "Spam detected. Please try again." });
            return;
        }

        // Validate form before submitting
        if (!validateForm()) return;

        const formSubmitted = Cookies.get('formSubmitted');
        if (formSubmitted) {
            setError({ msg: "You have submitted the form already. Please try again after some time." });
            return;
        }

        const url = process.env.API_URL + 'auth/contact-us/';



        postData(url, { email, name, message: msg, subject: "Mobile " + mobile })
            .then(data => {
                setEmail("");
                setMsg("");
                setName("");
                setMobile("");
                setMsgSet(true);
                Cookies.set('formSubmitted', 'true', { expires: 0.25 }); // 6 hours expiration
                // setSubmitting(false);
            })
            .catch(err => {
                setError({ msg: "Something went wrong. Please try again." });
                console.log(err);
                // setSubmitting(false);
            });
        
    };

    const validateCaptcha = (e) => {
        const input = e.target.value;
        setCaptchaValid(input === captchaAnswer);
    };

    return (
        <>
            <Head>
                <title>Contact | Coding Chaska</title>
                <meta name="keywords" content="Contact Coding Chaska, Contact at Naigaon East, Mumbai" />

                <meta name="description" content="Want to learn Programming, Python, Website Development, Data Science? Feel free to contact us. We look forward to hearing from you" />
            </Head>
            <div className="container max-w-none">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <Link href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                </svg>
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
                        {/* Contact Info */}
                        <h1 className="text-2xl bold">Point of Contact</h1>
                        <br />
                        <p>codingchaska.info@gmail.com</p>
                        <p>+91 9518-90-1902, +91 9370-39-4747</p>
                        <br />
                        <p>005, Jay Vijay Nagar Building 3, Opposite Seven Square Academy School, Naigaon East, Mumbai, Maharashtra</p>
                        <br />
                    </div>

                    <div className="md:w-7/12 md:pl-10 prose max-w-none">
                        <h2>Feel free to fill out the form below. We look forward to hearing from you</h2>
                        <form>
                            {/* Honeypot Field (Hidden) */}
                            <input type="text" value={honeypot} onChange={e => setHoneypot(e.target.value)} style={{ display: 'none' }} />

                            <div className="mb-4 form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder="name" className="input input-bordered w-full" />
                                {error.name && <label className="label-text-alt text-error opacity-80">{error.name}</label>}
                            </div>

                            <div className="mb-4 form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email:</span>
                                </label>
                                <input required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered w-full" />
                                {error.email && <label className="label-text-alt text-error opacity-80">{error.email}</label>}
                            </div>

                            <div className="mb-4 form-control w-full">
                                <label className="label">
                                    <span className="label-text">Mobile:</span>
                                </label>
                                <input required value={mobile} onChange={e => setMobile(e.target.value)} type="text" placeholder="mobile" className="input input-bordered w-full" />
                                {error.mobile && <label className="label-text-alt text-error opacity-80">{error.mobile}</label>}
                            </div>

                            <div className="mb-4 form-control w-full">
                                <label className="label">
                                    <span className="label-text">Message:</span>
                                </label>
                                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} name="message" className="textarea textarea-bordered" placeholder="Message"></textarea>
                                {error.message && <label className="label-text-alt text-error opacity-80">{error.message}</label>}
                            </div>

                            {/* Simple Captcha */}
                            <div className="mb-4 form-control w-full">
                                <label className="label">
                                    <span className="label-text">Captcha: What is {captchaAnswer - 1} + 1?</span>
                                </label>
                                <input type="text" placeholder="Enter the sum" onChange={validateCaptcha} className="input input-bordered w-full" />
                                {error.captcha && <span className="label-text-alt text-error opacity-80">{error.captcha}</span>}
                            </div>

                            {/* Display general error message above the submit button */}
                            {error.msg && <p className="text-error">{error.msg}</p>}

                            {(!msgSent && !submitting) && (
                                <div className="text-center">
                                    <input type="submit" onClick={handleClick} className="btn btn-primary" />
                                </div>
                            )}

                            {submitting &&
                              <div className="text-center">
                                <button className="btn">
                                <span className="loading loading-spinner"></span>
                                loading
                              </button>
                              </div>
                            }
                        </form>

                        {msgSent && <p className="text-success">Thank you for sending your message. Our team will contact you soon.</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
