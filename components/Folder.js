
import React, { useState, useEffect } from "react";
// import * as Icons from "../utils/icon";
// import { postData } from "../functions/auth";
// import { postData } from "@/utils/auth";

import activeFileContext from "../context/activeFile";

function Folder({ explorer, folder_name, handleFileClick, container }) {
  const [expand, setExpand] = useState(explorer.file_name==="src");
//   const [icon, setIcon] = useState('File');
//   const IconComp = Icons[icon]
//   const IconFolderArrow = Icons[expand ? "ArrowOpen":'ArrowClose'];

  const {activeFile, setActiveFile} = React.useContext(activeFileContext);

  // first time store in container 
//   const saveCodeToContainer = ()=>{
//     let folderFileName = folder_name+explorer.file_name;
//     // console.log(folderFileName);

//     if (container && !explorer.is_folder){
//     // console.log(folderFileName);
//     let url = process.env.API_URL+`container/ssl/save-code/`;
//       postData(url, {code: explorer.code, container_name:container, file_name:folderFileName})
//       .then(data => {
//         // console.log(folderFileName, "fisttime save")
//           // console.log(data)  
//       }).catch(error => {
//         console.log(error);
//           // console.log(error);
//     })
//   }
//   }
//   React.useEffect(()=>{
//     saveCodeToContainer();
//     // console.log("container found", container, explorer.file_name)
//   },[container])


  React.useEffect(()=>{
    if(explorer.file_name=="main.py" || explorer.file_name=="index.html"){
      handleFileClick(explorer);
      let v = {activeID:explorer.id, folderFileName:folder_name+explorer.file_name}
      setActiveFile(v);
    }
  },[])

  // console.log(explorer.files, folder_name);
//   useEffect(()=>{
//     if (explorer.is_folder){ 
//          setIcon(expand?'OpenDirectory':"ClosedDirectory")
//     }else {
//           let extension = explorer.file_name.split(".").pop();
//           let available_list = ['js','html','json','css','py'];
          
//           if (available_list.includes(extension)){
//             setIcon(extension)
//           }
//     }
//   },[expand])

  const handleThis = () => {
    handleFileClick(explorer);
    let v = {activeID:explorer.id, folderFileName:folder_name+explorer.file_name}
    setActiveFile(v);
    console.log(v);
  }

  return (
    <div className="inline">

      
      {!explorer.is_folder && <span onClick={handleThis} 
      className="inline m-4"
      style={{ color:activeFile?.activeID===explorer.id?"#15802e":"",
       "cursor":"pointer" }}> 
      {explorer.file_name}  
      </span>}
      
      <span>
        {explorer.files && explorer.files.map((explore) => (
          <Folder key={explore.id} explorer={explore} 
          folder_name={folder_name+explorer.file_name+'/'} 
          handleFileClick={handleFileClick} 
          container={container}
          />
        ))}
      </span>
    </div>
  );
}

export default Folder;