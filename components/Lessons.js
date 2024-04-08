
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
        <div>
            {lessons.map((lesson, index) => (
                <div style={{width:"100%"}} key={index} className="px-4 py-1">
                  <Link style={{width:"100%",overflow:"hidden"}} className={lesson.id===currentLesson?.id?"text-primary":""} href={"/lesson/"+lesson.slug}>
                  <p>{lesson.name} </p>  
                  </Link>
                </div>
            ))}        
            
        </div>
     );
}
export default Lessons;