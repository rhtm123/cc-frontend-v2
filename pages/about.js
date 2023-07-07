function AboutPage() {
    return (
        <>
        <div className="container">
            {/* breadcrumbs */}

            <div className="text-sm breadcrumbs">
  <ul>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Home
      </a>
    </li> 
   
    <li>
      About
    </li>
  </ul>
</div>

<br />
<article className="prose max-w-none">

  <h1>Job Guarantee Programs</h1>
  
    <div class="grid md:grid-cols-4 gap-4">
        <div>
        <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Best Programs</h2>
    <p>We have designed the best Online Programming Courses/Programs to help you get your first job.</p>
    <div className="card-actions justify-end">
      <button className="btn">Discover</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Live Sessions</h2>
    <p>{`We conduct live sessions for our programs/courses. We clear students’ doubts during the live session`}</p>
    <div className="card-actions justify-end">
      <button className="btn">Contact Us</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Self Development</h2>
    <p>We provide free self-development courses in our programs. This will help in your job interviews.</p>
    <div className="card-actions justify-end">
      <button className="btn">Contact Us</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Job Consultancy</h2>
    <p>We provide free job consultancy in our programs. We provide jobs in the top companies. </p>
    <div className="card-actions justify-end">
      <button className="btn">Contact Us</button>
    </div>
  </div>
</div>
        </div>
        
    </div>

</article>



        </div>
        
        </> 
     );
}

export default AboutPage;