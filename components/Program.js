import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";
function Program({program}) {
  let blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#"

    return ( 
        <div className="card bg-base-100 shadow-xl">
        <figure>
        <LazyImageLoad src={program.image} blurhash={blurhash} alt={program.name}   />

          {/* <img src={program.image} alt={program.name} /> */}
          </figure>
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