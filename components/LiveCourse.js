
import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";

function LiveCourse({course}) {
  let blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#"

    return ( 
 <div className="card bg-base-100 shadow-xl">
  <figure>
    {/* <img src={course.image} alt={course.name} /> */}
    <LazyImageLoad src={course.image} blurhash={blurhash} alt={course.name}   />

    </figure>
  <div className="card-body">
    <h3 className="card-title">{course.name}</h3>
    <div className="card-actions justify-start">
      <Link href={"/live-course/"+course.slug}><button className="btn btn-primary">Join Now</button></Link>
    </div>
  </div>
</div>
     );
}

export default LiveCourse;