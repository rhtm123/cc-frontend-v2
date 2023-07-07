
import React from "react";

function Lessons({topic}) {

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
                <li><a>{lesson.name}</a></li>
            ))}        
            
        </ul>
     );
}
export default Lessons;