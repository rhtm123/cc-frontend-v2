import React from "react";


// import { postData } from '../functions/auth';
// import 'split-pane-react/esm/themes/theme2.css';

// import { useSession } from "next-auth/react";
// import { postDataAuth } from '../functions/auth'; 
// import Link from 'next/link';
import Folder from './Folder';
import activeFileContext from '../context/activeFile';


import dynamic from 'next/dynamic'
const CodeMirrorEditor = dynamic(import('./CodeMirrorEditor'), {ssr: false})


function CCEditorWrapperEmbed({project,embed=false}) {

    // console.log("Creating")

    const [projectCode, setProjectCode] = React.useState();
    const [language, setLanguage] = React.useState(project.lang?.prog_lang);
    // const { data: session } = useSession();
    // const [user, setUser] = React.useState();
    const [explorer, setExplorer] = React.useState();
    const [verticleAlign, setverticleAlign] = React.useState(false);
    
    // const [containerName, setContainerName] = React.useState();
    // const [loadingIframe, setLoadingIframe] = React.useState(true);

    const [activeFile, setActiveFile] = React.useState();

    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
          width,
          height,
        };
      }
    
      const [windowDimension, setWindowDimension] = React.useState(getWindowDimensions());
      // React.useEffect(()=>{
      //   if(windowDimension){
      //     if(windowDimension.width<=700){
      //       setverticleAlign(true);
      //     }
      //   }
      // },[windowDimension])

      React.useEffect(()=> {
        let url = process.env.API_URL + "editor/projectcodes/?project="+project.id;
        // console.log(url);
        fetch(url)
        .then(async (response) => {
        console.log("response", response)
          if (response.ok) {
            let data1 = await response.json();
            // console.log(data1);
            setExplorer({is_folder:true,file_name:"src",files:data1.results})

           } else {
            // console.log(response)
          }
        }).catch(error=>{ console.log(error) }) 
    },[])

    const [sizes1, setSizes1] = React.useState(["16%","50%",'auto']);
 

    function handleFileClick(projectCode) {
      setProjectCode(projectCode);
    }
    const [size, setSize] = React.useState(['60%', '40%']);
    const [size1, setSize1] = React.useState([100, 'auto']);


// user
// const getUser = () => {
//     if (session){
//         let url = process.env.API_URL + 'auth/get-user-email/';
//         postData(url, {"email":session.user.email})
//           .then(data => {
//             setUser(data);
//           }).catch(error => {
//             console.log(error)
//         })
//       }
// }

// React.useEffect(() => {
//     getUser();
//     setInterval(function() {
//       getUser();
//     }, 120000);

//   },[session]);

    
    
    
    return (<activeFileContext.Provider value={{activeFile, setActiveFile}}>

<a rel="noreferrer" target="_blank"
 href={"http://www.codingchaskalab.com/online-editor/"+ project.lang.prog_lang + "/" +project.slug}>
    <button style={{"margin-bottom":10}} data-aos="fade" className="btn btn-primary">Run this project</button></a>
<div>
           
              <div>
              {explorer ? 
                <Folder explorer={explorer} 
                folder_name="/" 
                handleFileClick={handleFileClick}
                // container={containerName}
                />
                : <p>loading...</p>}
              </div>

                <div className="mt-2">

                    {(projectCode) && 
                        <CodeMirrorEditor
                        key={projectCode.id}
                        // container={containerName}
                        projectCode={projectCode}
                        />
                    }


                </div>


        </div>

    
    </activeFileContext.Provider>
    );
}

export default CCEditorWrapperEmbed;