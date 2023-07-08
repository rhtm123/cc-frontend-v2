import Link from "next/link";
function Program({program}) {
    return ( 
        <div className="card bg-base-100 shadow-xl">
        <figure><img src={program.image} alt={program.name} /></figure>
        <div className="card-body">
          <h3 className="card-title">{program.name}</h3>
          <div className="card-actions justify-start">
            <Link href={"/program/"+program.slug}><button className="btn btn-primary">Join Now</button></Link>
          </div>
        </div>
      </div> 
     );
}

export default Program;