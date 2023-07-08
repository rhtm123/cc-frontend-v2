
import Link from "next/link";
function Error404() {
    return ( 
<div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Error 404</h1>
      <p className="py-6">Page not found.</p>
      <Link href="/"><button className="btn btn-primary">Go to Home Page</button></Link> 
    </div>
  </div>
</div>
     );
}

export default Error404;