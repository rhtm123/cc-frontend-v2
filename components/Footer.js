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
      <footer className="grid gap-4 grid-cols-1 md:grid-cols-4 p-4 md:p-8 bg-base-200 text-base-content">
        <div className="col-span-2">
          <span className="flex items-center gap-2">
            Proudly Made by Indians
            <img className="inline" width="20px" src="/images/india-flag-icon.png" alt="India Flag" />
          </span>

          <div className="py-4">
            <h4 className="text-xl font-semibold">Coding Chaska</h4>
            <p className="py-2">We create an atmosphere where everyone develops a Chaska in coding. Join our programs and get your dream job.</p>
            <p>Join us at our brand new institute in Naigaon East, Mumbai, where you can experience the advantages of in-person learning. We are the first Coding and Computer Class in Naigaon East.</p>

            <br />

            <h4 className="text-xl font-semibold gap-2 flex items-center">
              Address
              <GoHome size={24} />
            </h4>
            <p className="text-muted-foreground py-2">005, Jay Vijay Nagar Building 3, Opposite Seven Square Academy School, Naigaon East, Maharashtra</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold">Social Media:</span>
            <a href="https://www.youtube.com/@CodingChaska" target="_blank" rel="noopener noreferrer">
              <RiYoutubeLine className="hover:text-primary" size={36} />
            </a>
            <a href="https://www.instagram.com/codingchaskaofficial/" target="_blank" rel="noopener noreferrer">
              <RiInstagramLine className="hover:text-primary" size={30} />
            </a>
            <a href="https://x.com/CodingChaska" target="_blank" rel="noopener noreferrer">
              <RiTwitterXLine className="hover:text-primary" size={28} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer-title text-xl font-semibold">Explore</h4>
          <ul className="space-y-2">
            <li><Link className="link link-hover block" href="/programs">Our Programs</Link></li>
            <li><a className="link link-hover block" rel="noreferrer" target="_blank" href="http://www.lab.codingchaska.com/coding-problems">Coding Problems</a></li>
            <li><a className="link link-hover block" rel="noreferrer" target="_blank" href="http://www.lab.codingchaska.com">Write Code Online</a></li>
            <li><Link className="link link-hover block" href="/self-paced-courses">Self Paced Courses</Link></li>
            <li><Link className="link link-hover block" href="/live-courses">Live Courses</Link></li>
            <li><Link className="link link-hover block" href="/quizzes">Solve MCQs</Link></li>
            <li><Link className="link link-hover block" href="/quick-tutorials">Quick Tutorials</Link></li>
            <li><Link className="link link-hover block" href="/scholarship-program">Scholarship Program</Link></li>
            <li><Link className="link link-hover block" href="/about">About us</Link></li>
            <li><Link className="link link-hover block" href="/contact">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title text-xl font-semibold">Legal</h4>
          <ul className="space-y-2">
            <li><Link className="link link-hover block" href="/privacy-policy">Privacy policy</Link></li>
            <li><Link className="link link-hover block" href="/terms-of-service">Terms of service</Link></li>
            <li><Link className="link link-hover block" href="/payment-and-refund-policy">Payment and refund Policy</Link></li>
            <li><Link className="link link-hover block" href="/student-code-of-conduct">Student code of conduct</Link></li>
          </ul>
        </div>
      </footer>

      <footer className="footer-center p-4 bg-base-300 text-base-content text-center">
        <div>
          <p>Copyright © 2022 - All rights reserved by Learning Setu Private Ltd | <span id="gt"></span></p>
        </div>
      </footer>
    </div>

  );
}

export default Footer;