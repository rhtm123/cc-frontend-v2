import React from "react";
import Link from "next/link";
import JoinNow from "@/components/JoinNow";
import Head from "next/head";
import Error404 from "@/components/Error404";
import { BsTwitterX, BsLinkedin, BsFacebook, BsBook, BsListUl, BsPinMap, BsBarChart, BsBuilding } from "react-icons/bs";

function LiveCoursePage({ data, error }) {
  const [activeTab, setActiveTab] = React.useState("overview");

  if (error) return <Error404 />;

  return (
    <>
      <Head>
        <title>{`${data.seo_title} | ${data.institute?.name}, ${data.institute?.branch}`}</title>
        <meta name="description" content={data.seo_description} />
        <meta name="image" content={data.image} />

        {/* Schema.org for Google */}
        <meta itemProp="name" content={data.name} />
        <meta itemProp="description" content={data.seo_description} />
        <meta itemProp="image" content={data.image} />

        {/* Facebook */}
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.seo_description} />
        <meta property="og:image" content={data.image} />
      </Head>

      <div className="container max-w-none">
        {/* Keep original breadcrumbs */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/live-courses"}>
                Live Courses
              </Link>
            </li>
            <li>
              {data.name}
            </li>
          </ul>
        </div>

        {/* Course Header */}
        <div className="grid md:grid-cols-2 gap-8 py-6">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{data.name}</h1>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <BsBuilding className="text-lg text-primary" />
                <p className="text-gray-700">
                  <span className="font-medium">Offered by: </span>
                  <span className="opacity-90">{data.institute?.name}, {data.institute?.branch}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <BsBook className="text-lg text-primary" />
                <p className="text-gray-700">
                  <span className="font-medium">Course type: </span>
                  <span className="opacity-90">{data.course_type}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <BsBarChart className="text-lg text-primary" />
                <p className="text-gray-700">
                  <span className="font-medium">Difficulty level: </span>
                  <span className="opacity-90">{data.difficult_level}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <BsPinMap className="text-lg text-primary" />
                <p className="text-gray-700">
                  <span className="font-medium">Location: </span>
                  <a
                    target="_blank"
                    href={data.institute?.location?.google_map}
                    className="opacity-90 hover:text-primary hover:underline transition-colors"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 py-4">
          {/* Left Column */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="tabs tabs-boxed bg-base-200 p-1 rounded-lg mb-6">
              <button
                onClick={() => setActiveTab("overview")}
                className={`tab flex items-center gap-2 ${activeTab === "overview" ? "tab-active bg-base-100 shadow" : ""}`}
              >
                <BsBook className="text-lg" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab("curriculam")}
                className={`tab flex items-center gap-2 ${activeTab === "curriculam" ? "tab-active bg-base-100 shadow" : ""}`}
              >
                <BsListUl className="text-lg" />
                Curriculum
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-base-100 rounded-xl p-4 shadow-sm border border-base-300/20">
              {activeTab === "overview" && (
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: data.overview }} />
                </div>
              )}

              {activeTab === "curriculam" && (
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="card bg-base-100 shadow-md border border-base-300/20 sticky top-4">
              <div className="card-body">
                <JoinNow courseName={data.name} purpose="join_course" />

                <div className="divider">Share this course</div>

                <div className="flex justify-center gap-4">
                  <a
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?text=${data.name}`}
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle hover:bg-blue-50 hover:text-blue-400"
                    aria-label="Share on Twitter"
                  >
                    <BsTwitterX className="text-xl" />
                  </a>
                  <a
                    target="_blank"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.codingchaska.com/live-course/${data.slug}`}
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle hover:bg-blue-50 hover:text-blue-600"
                    aria-label="Share on LinkedIn"
                  >
                    <BsLinkedin className="text-xl" />
                  </a>
                  <a
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://www.codingchaska.com/live-course/${data.slug}`}
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle hover:bg-blue-50 hover:text-blue-600"
                    aria-label="Share on Facebook"
                  >
                    <BsFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const url = `${process.env.API_URL}course/course/${slug}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { props: { error: true } };
    }
    const data = await res.json();
    return { props: { data, error: false } };
  } catch (error) {
    return { props: { error: true } };
  }
}

export default LiveCoursePage;