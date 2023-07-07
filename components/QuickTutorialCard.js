import Link from "next/link";
function QuickTutorialCard({tutorial}) {
    return ( 
<div className="card bg-base-100 shadow-xl">
  <figure><img src={tutorial.feature_img} alt={tutorial.header} /></figure>
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