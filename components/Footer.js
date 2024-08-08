import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { RiYoutubeLine } from "react-icons/ri";

import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";


function Footer() {


  React.useEffect(() => {
    // Function to create and append the script element
    const loadScript = async () => {
        const script = document.createElement('script');
        script.src = 'https://thelearningsetu.com/static/js/gt.js'; // Replace with your script path
        script.async = true; // Optional: Load script asynchronously (recommended)

        document.body.appendChild(script);
    };
    // Load the script only once
    loadScript();
    

    // Optional cleanup function to remove the script if needed
    return () => {
        // Code to remove the script (if applicable)
    };
}, []);


    return ( 
    
    <div>
  <footer className="grid gap-4 grid-cols-1 md:grid-cols-4 footer p-10 bg-base-200 text-base-content">
  <div className="col-span-2">
  <span>Proudly Made by Indians <img className="inline" width={'20px'} src='/images/india-flag-icon.png' /></span> 

  <div className="py-4">
  <h4 className="text-xl footer-widget-title">Coding Chaska</h4>

  <p className="py-2">We create an atmosphere where everyone
    develops a Chaska in coding. Join our programs 
     and get your dream job.</p>
  
  <p>Join us at our brand new institute in Naigaon East, Mumbai, where you can experience the advantages of in-person learning. We are the first Coding and Computer Class in Naigaon East</p>

  <br />


  <h4 class="footer-widget-title text-xl gap-2 flex items-center">Address 
    <GoHome size={24} />
      </h4>
  <p class="text-muted-foreground py-2">005, Jay Vijay Nagar Building 3, Opposite Seven Square Academy School, Naigaon East, Maharashtra</p>

  </div>

  
    <div className="flex items-center gap-2">
      <span className="font-bold">Social Media: </span>
      <a href="https://www.youtube.com/@CodingChaska" target="_blank">
        <RiYoutubeLine className="hover:text-primary" size={36} />
        </a> 

        <a target="_blank" href="https://www.instagram.com/codingchaskaofficial/">
      <RiInstagramLine className="hover:text-primary" size={30} />
        
      </a>
      <a href="https://x.com/CodingChaska" target="_blank">
      <RiTwitterXLine className="hover:text-primary" size={28} />

        </a> 

    </div>


     {/* <div>
        <img width={'20%'} src='/images/iso_certificate.png' />

      </div> */}
      
  </div> 
  <div>
    <span className="footer-title">Explore</span> 
    
    <Link className="link link-hover"  href="/programs">Our Programs</Link>
    <a className="link link-hover" rel="noreferrer" target='_blank' href="http://www.codingchaskalab.com/coding-problems">Coding Problems</a> 
    <a className="link link-hover"  rel="noreferrer" target='_blank' href="http://www.codingchaskalab.com">Write Code Online</a> 
    <Link className="link link-hover"  href={"/self-paced-courses"}>Self Paced Courses</Link> 
    <Link className="link link-hover" href={"/live-courses"}>Live Courses</Link> 
    <Link className="link link-hover" href="/quizzes">Solve MCQs</Link>
    <Link className="link link-hover" href="/quick-tutorials">Quick Tutorials</Link>
    <Link className="link link-hover" href="/scholarship-program">Scholarship Program</Link>

    <Link className="link link-hover" href="/about">About us</Link>
    <Link className="link link-hover" href="/contact">Contact us</Link>

  </div> 

  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover" href="/privacy-policy">Privacy policy</Link>
    <Link className="link link-hover" href="/terms-of-service">Terms of service</Link>
    <Link className="link link-hover" href="/payment-and-refund-policy">Payment and refund Policy</Link>

    <Link className="link link-hover" href="/student-code-of-conduct">Student code of conduct</Link>

  </div>

</footer>

<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved by Learning Setu Private Ltd | <span id="gt"></span></p>
  </div>
</footer>
</div>
     );
}

export default Footer;