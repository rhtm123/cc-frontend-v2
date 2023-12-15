
import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";

function Quiz({quiz}) {
  let blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#"

    return ( 
        <div className="card bg-base-100 shadow-xl">
        <figure>
        <LazyImageLoad src={quiz.image} blurhash={blurhash} alt={quiz.name}   />

          {/* <img src={quiz.image} alt={quiz.name} /> */}
          
          </figure>
        <div className="card-body">
          <h3 className="card-title">{quiz.name}</h3>
          <div className="card-actions justify-start">
            <Link href={"/quiz/"+quiz.slug}><button className="btn btn-primary">Solve Quiz</button></Link>
          </div>
        </div>
      </div>

     );
}

export default Quiz;