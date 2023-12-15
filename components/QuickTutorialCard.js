import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";
function QuickTutorialCard({tutorial}) {
  let blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#"

    return ( 
<div className="card bg-base-100 shadow-xl">
  <figure>
  <LazyImageLoad src={tutorial.feature_img} blurhash={blurhash} alt={tutorial.header}   />

    </figure>
  <div className="card-body">
    <h3 className="card-title">{tutorial.header}</h3>
    <div className="card-actions justify-end">
      <Link href={"/quick-tutorial/"+tutorial.slug}><button className="btn">Read</button></Link>
    </div>
  </div>
</div>
     );
}

export default QuickTutorialCard;