
const WEBSITE = 'https://www.codingchaska.com';

function generateSiteMap(data) {

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->

     ${data?.lessons
       .map(( lesson, id ) => {
         return `
       <url>
            <loc>${`${WEBSITE}/lesson/${lesson.slug}`}</loc>
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


  let url = process.env.API_URL + `course/course_list/?is_published=&course_type=self-paced`;
  const res3 = await fetch(url);
  const data = await res3.json();
  const courses = data.results;
  let lesson_res;
  let lesson_data;

  let lessons = []
  for (let course of courses){
    let lesson_url = process.env.API_URL + "lesson/lessons/?topic=&topic__course="+course.id;

    while (true){
        lesson_res = await fetch(lesson_url);
        lesson_data = await lesson_res.json();
        lessons.push(...lesson_data.results)
        if (lesson_data.next) {lesson_url=lesson_data.next} else {break}
    }
  }


  let sharedState = {
    lessons : lessons,

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