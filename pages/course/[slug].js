import React from "react";
import Link from "next/link";
// import Lessons from "@/components/Lessons";
import Head from "next/head";
import Error404 from "@/components/Error404";
import Topic from "@/components/Topic";

function CoursePage({ data, error }) {

  const [activeTab, setActiveTab] = React.useState("content");
  const [loading, setLoading] = React.useState(true);
  const [topics, setTopics] = React.useState([]);


  const loadTopics = () => {
    let url = process.env.API_URL + `lesson/topics/?course=${data.id}&ordering=order`
    fetch(url)
      .then(async (response) => {
        if (response.ok) {
          var data = await response.json();
          setTopics(data.results);
          setLoading(false);
        } else {

        }
      }).catch(error => { })
  }
  React.useEffect(() => {
    loadTopics();
  }, []);


  if (error) return <Error404 />;


  return (
    <>
      <Head>
        <title>{data.seo_title} | {data.institute?.name}, {data.institute?.branch}</title>


        <meta name="description" content={data.seo_description} />
        <meta name="image" content={data.image} />

        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content={data.name} />
        <meta itemProp="description" content={data.seo_description} />
        <meta itemProp="image" content={data.image} />

        {/* Facebook  */}
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.seo_description} />
        <meta property="og:image" content={data.image} />


      </Head>
      <div className="px-8 max-w-none">

        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Home
              </Link>
            </li>

            <li>
              <Link href={"/self-paced-courses"}>
                Self Paced Courses
              </Link>
            </li>
            <li>
              {data.name}
            </li>
          </ul>
        </div>

        <br />

        <div className="m-auto md:w-3/4">




          <div className="tabs tabs-boxed">
            <a onClick={() => setActiveTab("content")} className={activeTab == "content" ? "tab tab-active" : "tab"}>Content</a>
            <a onClick={() => setActiveTab("overview")} className={activeTab == "overview" ? "tab tab-active" : "tab"}>Overview</a>
            <a onClick={() => setActiveTab("resources")} className={activeTab == "resources" ? "tab tab-active" : "tab"}>Resources</a>
          </div>

          {activeTab == "content" && <div>

            {loading ? <span className="loading py-6 loading-dots loading-sm">
            </span> :

              <div className="my-4 menu bg-base-200 rounded-box">


                {topics.map((topic, index) =>
                  <Topic topic={topic} />
                )}

              </div>
            }
          </div>}

          {activeTab == "resources" && <div>
            <br />
            <article className=" prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: data.materials }}></div>

            </article>
          </div>}

          {activeTab == "overview" && <div>
            <br />
            <article className=" prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: data.overview }}></div>

            </article>
          </div>}

        </div>

      </div>


    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { slug } = context.params;
  const url = process.env.API_URL + "course/course/" + slug;

  const res = await fetch(url)
  const error = res.ok ? false : true
  const data = await res.json()

  return {
    props: {
      data: data, error: error
    }

  }
}
export default CoursePage;