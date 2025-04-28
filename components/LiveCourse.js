import Link from "next/link";
import LazyImageLoad from "./LazyImageLoad";

function Course({ course }) {
  const blurhash = "LBB4Ir}liwI:K6Nfn}xZ4T#Q%0o#";
  const isLive = course.course_type === "live";

  return (
    <div
      data-aos="fade"
      className="card bg-base-100 shadow hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden"
    >
      <Link href={`/live-course/${course.slug}`}>
        <figure className="relative h-48 w-full overflow-hidden">
          <LazyImageLoad
            src={course.image}
            blurhash={blurhash}
            alt={course.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <span
            className={`absolute top-3 right-3 text-xs uppercase font-semibold px-3 py-1 rounded-full ${isLive ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
              }`}
          >
            {isLive ? "Live" : "Self-Paced"}
          </span>
        </figure>
      </Link>

      <div className="card-body p-5">
        <Link href={`/live-course/${course.slug}`}>
          <h3 className="text-xl font-semibold text-primary hover:underline">
            {course.name}
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Course;
