import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";
function Program({program}) {
  let blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#"

    return ( 
        <div data-aos="fade" className="card bg-base-100 shadow-xl">
          <Link href={"/program/"+program.slug}>
        <figure>
        <LazyImageLoad src={program.image} blurhash={blurhash} alt={program.name}   />

          {/* <img src={program.image} alt={program.name} /> */}
          </figure>
          </Link>
        <div className="card-body p-4">
        <Link href={"/program/"+program.slug}>
          <h3 className="card-title text-primary">{program.name}</h3>
        </Link>
         
        </div>
      </div> 
     );
}

export default Program;