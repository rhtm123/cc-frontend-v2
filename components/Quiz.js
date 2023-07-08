
import Link from "next/link";

function Quiz({quiz}) {
    
    return ( 
        <div className="card bg-base-100 shadow-xl">
        <figure><img src={quiz.image} alt={quiz.name} /></figure>
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