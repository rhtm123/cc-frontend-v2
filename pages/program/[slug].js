import Link from "next/link";
import React from "react";
import JoinNow from "@/components/JoinNow";
import Error404 from "@/components/Error404";
import Head from "next/head";
import { FaTwitter, FaLinkedin, FaFacebook, FaShare, FaBookOpen, FaListUl } from "react-icons/fa";

function ProgramPage({ data, error }) {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [courses, setCourses] = React.useState([]);

  const getCourses = async () => {
    try {
      const url = `${process.env.API_URL}course/program_courses/?course=&program=${data.id}`;
      const response = await fetch(url);
      if (response.ok) {
        const courseData = await response.json();
        setCourses(courseData);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  React.useEffect(() => {
    getCourses();
  }, [data]);

  if (error) return <Error404 />;

  const cleanDescription = data.detail.replace(/<[^>]+>/g, "").slice(0, 120);

  return (
    <>
      <Head>
        <title>{`${data.name} - Coding Chaska`}</title>
        <meta name="description" content={cleanDescription} />
        <meta name="image" content={data.image} />

        {/* Schema.org for Google */}
        <meta itemProp="name" content={data.name} />
        <meta itemProp="description" content={cleanDescription} />
        <meta itemProp="image" content={data.image} />

        {/* Facebook */}
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={cleanDescription} />
        <meta property="og:image" content={data.image} />
      </Head>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Breadcrumbs */}

        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Home
              </Link>
            </li>

            <li>
              <Link href={"/programs"}>
                Programs
              </Link>
            </li>
            <li>
              {data.name}
            </li>
          </ul>
        </div>


        {/* Program Header */}
        <div className="my-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{data.name}</h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="tabs tabs-boxed bg-base-200 p-1 rounded-lg mb-6">
              <button
                onClick={() => setActiveTab("overview")}
                className={`tab flex items-center gap-2 ${activeTab === "overview" ? "tab-active bg-base-100 shadow" : ""}`}
              >
                <FaBookOpen className="text-lg" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab("curriculam")}
                className={`tab flex items-center gap-2 ${activeTab === "curriculam" ? "tab-active bg-base-100 shadow" : ""}`}
              >
                <FaListUl className="text-lg" />
                Curriculum
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-base-100 rounded-xl p-4 shadow-sm border border-base-300/20">
              {activeTab === "overview" && (
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: data.detail }} />
                </div>
              )}

              {activeTab === "curriculam" && (
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-200">
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title font-medium text-lg">
                        {course.course.name}
                      </div>
                      <div className="collapse-content">
                        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: course.course.content }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="card bg-base-100 shadow-md border border-base-300/20">
              <div className="card-body">
                <JoinNow courseName={data.name} purpose="join_program" />

                <div className="divider">Share this program</div>

                <div className="flex justify-center gap-4">
                  <a
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?text=${data.name}`}
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle hover:bg-blue-50 hover:text-blue-400"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    target="_blank"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.codingchaska.com/live-course/${data.slug}`}
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle hover:bg-blue-50 hover:text-blue-600"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://www.codingchaska.com/live-course/${data.slug}`}
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle hover:bg-blue-50 hover:text-blue-600"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook className="text-xl" />
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
  const url = `${process.env.API_URL}course/program/${slug}`;

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

export default ProgramPage;