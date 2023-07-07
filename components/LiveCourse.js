
import Link from "next/link";

function LiveCourse({course}) {
    return ( 
 <div className="card bg-base-100 shadow-xl">
  <figure><img src={course.image} alt={course.name} /></figure>
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