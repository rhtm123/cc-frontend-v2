
import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";

function Quiz({ quiz }) {
    let blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#";

    return ( 
        <div data-aos="fade"  className="card bg-base-100 shadow-xl">
          <Link href={"/quiz/"+quiz.slug}>
        <figure>
                    <LazyImageLoad src={quiz.image} blurhash={blurhash} alt={quiz.name} />
                </figure>
            </Link>
            <div className="card-body p-4">
        <Link href={"/quiz/"+quiz.slug}>
          <h3 className="card-title text-primary">{quiz.name}</h3>
          </Link>
            </div>
        </div>
    );
}

export default Quiz;
