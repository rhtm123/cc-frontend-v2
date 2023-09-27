
import React from "react";
import Link from "next/link";

function Lessons({topic, currentLesson}) {

    const [lessons, setLessons ] = React.useState([])
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {


        let url = process.env.API_URL + 'lesson/lessons/?ordering=order&topic='+topic.id 
    
          fetch(url)
          .then(async (response) => {
            if (response.ok) {
              var data = await response.json();
              setLessons(data.results);
              setLoading(false);
              // loadJs();
    
             } else {
              
            }
          }).catch(error=>{  })
      
        }, []);
    
      if (loading) return <span className="loading loading-dots loading-sm"></span>

    return ( 
        <ul>
            {lessons.map((lesson, index) => (
                <li key={index}><Link className={lesson.id===currentLesson?.id?"active":""} href={"/lesson/"+lesson.slug}>{lesson.name}</Link></li>
            ))}        
            
        </ul>
     );
}
export default Lessons;