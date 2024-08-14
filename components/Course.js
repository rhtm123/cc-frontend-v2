
import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";

function Course({course}) {
  let blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#"
    return ( 
 <div data-aos="fade"  className="card bg-base-100 shadow ">
  <Link href={"/course/"+course.slug}>
  <figure>
    <LazyImageLoad src={course.image} blurhash={blurhash} alt={course.name}   />
    {/* <img src={course.image} alt={course.name} /> */}
    
    </figure>
    </Link>
  <div className="card-body p-4">
  <Link href={"/course/"+course.slug}>
    <h3 className="card-title text-primary">{course.name}</h3>
  </Link>
    {/* <div className="card-actions justify-start">
      <Link href={"/course/"+course.slug}><button data-aos="fade" className="btn btn-primary">Join Now</button></Link>
    </div> */}
  </div>
</div>
     );
}

export default Course;