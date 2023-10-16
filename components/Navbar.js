import { useTheme } from 'next-themes';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



function Navbar() {
  const { theme, setTheme } = useTheme();
  
  const router = useRouter();

React.useEffect(() => {
  const All_Details = document.querySelectorAll('details');
  All_Details.forEach(deet=>{
    if (deet!=this && deet.open) deet.open = false
  });

}, [router.asPath]);


    return ( 
      <>
        <div className="navbar bg-base-100" style={{ borderBottom:"1.2px solid grey" }}>


      
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link href="/programs">Programs</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Explore</summary>
          <ul className="p-2 z-30">
            <li><Link href="/live-courses">Live Courses</Link></li>
            <li><Link href="/self-paced-courses">Self Paced Courses</Link></li>
            <li><Link href="/quizzes">Solve MCQs</Link></li>

            <li><Link href="/quick-tutorials">Quick Tutorials</Link></li>

            <li>
              <a rel="noreferrer" target='_blank' href="http://www.codingchaskalab.com/coding-problems"><span className="menu-text">Coding Problems</span></a>
            </li> 
            <li>
                <a rel="noreferrer" target='_blank' href="http://www.codingchaskalab.com/"><span className="menu-text">Write Code Online</span></a>
            </li> 

          </ul>
        </details>
      </li>
      <li><Link href="/about">About</Link></li>
      </ul>
    </div>

    <Link href='/' className="btn btn-ghost normal-case text-xl">
      <img width={"180px"} src="/images/logo/logo.png" alt="Coding Chaska Logo" />
    </Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/programs">Programs</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Explore</summary>
          <ul className="p-2 z-30 bg-base-200">
            <li><Link href="/live-courses">Live Courses</Link></li>
            <li><Link href="/self-paced-courses">Self Paced Courses</Link></li>
            <li><Link href="/quizzes">Solve MCQs</Link></li>

            <li><Link href="/quick-tutorials">Quick Tutorials</Link></li>

            <li>
                <a rel="noreferrer" target='_blank' href="http://www.codingchaskalab.com/coding-problems"><span className="menu-text">Coding Problems</span></a>
            </li> 
            <li>
                <a rel="noreferrer" target='_blank' href="http://www.codingchaskalab.com"><span className="menu-text">Write Code Online</span></a>
            </li> 

          </ul>
        </details>
      </li>
      <li><Link href="/about">About</Link></li>
    </ul>

    <select className="select select-sm" value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="forest">Dark</option>
      <option value="cupcake">Light</option>
    </select>
  </div>
</div>
</>
     );
}

export default Navbar;