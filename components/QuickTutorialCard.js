import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";
function QuickTutorialCard({tutorial}) {
  let blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#"

    return ( 
<div className="card bg-base-100 shadow-xl">
<Link href={"/quick-tutorial/"+tutorial.slug}>
  <figure>
  <LazyImageLoad src={tutorial.feature_img} blurhash={blurhash} alt={tutorial.header}   />

    </figure>
  </Link>
  <div className="card-body p-4">
  <Link href={"/quick-tutorial/"+tutorial.slug}>
    <h3 className="card-title text-primary">{tutorial.header}</h3>
    </Link>
    {/* <div className="card-actions justify-end">
      <Link href={"/quick-tutorial/"+tutorial.slug}><button className="btn">Read</button></Link>
    </div> */}
  </div>
</div>
     );
}

export default QuickTutorialCard;