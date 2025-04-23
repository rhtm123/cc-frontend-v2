import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";
function Program({ program }) {
  let blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#"

  return (
    <div data-aos="fade" className="card bg-base-100 shadow">
      <Link href={"/program/" + program.slug}>
        <figure>
          <LazyImageLoad src={program.image} blurhash={blurhash} alt={program.name} />

          {/* <img src={program.image} alt={program.name} /> */}



          <span className="absolute top-3 right-3">

            <span
              className={`text-xs uppercase font-semibold px-2 py-1 mx-1  rounded-full bg-blue-100 text-blue-600`}
            >
              Job Ready
            </span>

            <span
              className={` text-xs uppercase font-semibold px-2 py-1 mx-1 rounded-full bg-red-100 text-red-600`}
            >
              Live
            </span>

          </span>
        </figure>
      </Link>
      <div className="card-body p-4">
        <Link href={"/program/" + program.slug}>
          <h3 className="card-title text-primary">{program.name}</h3>
        </Link>

      </div>
    </div>
  );
}

export default Program;