
const WEBSITE = 'https://www.codingchaska.com';

function generateSiteMap(data) {

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.codingchaska.com/quizzes</loc>
     </url>
     <url>
       <loc>https://www.codingchaska.com/quick-tutorials</loc>
     </url>
     <url>
       <loc>https://www.codingchaska.com/about</loc>
     </url>
     <url>
       <loc>https://www.codingchaska.com/contact</loc>
     </url>

     <url>
       <loc>https://www.codingchaska.com/live-courses</loc>
     </url>

     <url>
       <loc>https://www.codingchaska.com/self-paced-coursed</loc>
     </url>

     ${data?.livecourses
       .map(( course, id ) => {
         return `
       <url>
            <loc>${`${WEBSITE}/live-course/${course.slug}`}</loc>
       </url>
     `;
       })
       .join('')}

       ${data?.programs
        .map(( program, id ) => {
          return `
        <url>
             <loc>${`${WEBSITE}/program/${program.slug}`}</loc>
        </url>
      `;
        })
        .join('')}

        ${data?.tutorials
            .map(( tutorial, id ) => {
              return `
            <url>
                 <loc>${`${WEBSITE}/quick-tutorial/${tutorial.slug}`}</loc>
            </url>
          `;
            })
            .join('')}


   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site

//   let url1 = process.env.API_URL + ""

  let url4 = process.env.API_URL + `short-tutorial/short-tuts/?ordering=-created&is_published=true`;
    
//   const {data:programs} = useSWR(process.env.API_URL+'course/programs/?is_published=true', fetcher);
//   const {data:events, error1} = useSWR(process.env.API_URL+"event/events/", fetcher);
//   const {data:livecourses, error} = useSWR(process.env.API_URL + `course/course_list/?is_published=true&course_type=live`, fetcher);
//   const {data:tutorials} = useSWR(url4, fetcher);

  const res1 = await fetch(process.env.API_URL+'course/programs/?is_published=true');
  const programs = await res1.json();

  const res2 = await fetch(process.env.API_URL + `course/course_list/?is_published=true&course_type=live`);
  const livecourses = await res2.json();

//   let url = process.env.API_URL + `course/course_list/?is_published=&course_type=self-paced`;
//   const res4 = await fetch(url);
//   const selfcourses = await res4.json();

  let tutorials = [];
  while (true){
    const res3 = await fetch(url4);
    const data = await res3.json();
    tutorials.push(...data.results)
    if (data.next) {url4=data.next} else {break}
  }
  



  let sharedState = {
    programs : programs.results,
    // events: events,
    livecourses: livecourses.results,
    tutorials:tutorials,
    // selfcourses:selfcourses.results,
    // user:user,
}

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(sharedState);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;