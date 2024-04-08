import React from "react";
import Lessons from "./Lessons";

export default function Topic({ topic, lesson}){

  const [show, setShow] = React.useState(false);

  React.useEffect(()=>{

    setShow(topic.id==lesson?.topic.id);
  },[topic])

  return (

    <div key={topic.id} className="w-full">
    
    <label onClick={()=>setShow(!show)} for={topic.id} class="w-full flex justify-between items-center px-2 py-2 font-semibold cursor-pointer">
            <span>{topic.name}</span>
            <span class="text-gray-500">{show?'-':'+'}</span>
    </label>

    {show && <div>
      <Lessons topic={topic} currentLesson={lesson} />
    </div>}

</div>
  )
}