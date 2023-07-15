

import React from 'react';

// import { postData, postDataAuth } from '../functions/auth';
// import activeFileContext from '../context/activeFile';

import Editor from '@monaco-editor/react';
// import { io } from "socket.io-client";


const CodeMirrorEditor = ({container, projectCode, folderFileName}) => {
  const [code, setCode] = React.useState(projectCode.code);

  // const [socket, setSocket] = React.useState("");

//   const {activeFile, setActiveFile} = React.useContext(activeFileContext);

  const myStateRef = React.useRef(code);


  // React.useEffect(()=>{
  //   let url = `ws://143.110.190.99:5000/ws/socket-server/`

  //   const chatSocket = new WebSocket(url);
  //   setSocket(chatSocket);

        
  // },[])

  // React.useEffect(() => {

    
  //   const socket = io("http://127.0.0.1:8000/ws/socket-server/", {
  //     transports: ["websocket"],
  //     cors: {
  //       origin: "http://localhost:3000/",
  //     },
  //   });

  //   setSocket(socket);

  //   socket.on("connect", (data) => {
  //     console.log(data);
  //     console.log("Connected")
  //   });

  //   // setLoading(false);

  //   socket.on("data", (data) => {
  //     // setMessage(data);
  //     console.log(data)
  //   });

  //   socket.on("disconnect", (data) => {
  //     console.log(data);
  //   });

  //   return function cleanup() {
  //     socket.disconnect();
  //   };
  
// }, []);

  React.useEffect(()=>{
    document.addEventListener("keydown", function(e) {
      if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        // if(projectCode.id===activeFile.id){
        // console.log(code);
        // // updateCodeToDataBase(true);
        // // saveCodeToContainer(false);
        // }
      }
    }, false);
  },[])



  // const saveCodeToContainer = (save_called=false)=>{
  //   if (container && code){
  //   // console.log(folderFileName);
  //   let url = process.env.API_URL+`container/ssl/save-code/`;
  //   // let url = "http://127.0.0.1:8000/save-code/"
    
  //   let code1 = save_called ? myStateRef.current:code;
  //   console.log(code1);

  //     postData(url, {code: code1, container_name:container, file_name:activeFile ? activeFile.folderFileName:"/src/main.py"})
  //     .then(data => {
  //         // console.log("this is success", data)    
  //     }).catch(error => {
  //         console.log("fdafka", error);
  //   })
  // }
  // }

  // const updateCodeToDataBase = (save_called=false) => {
  //   let code1 = save_called ? myStateRef.current:code;
  //   // console.log(code1);

  //   projectCode.code = code1;

  //   if(projectCode && projectCode.project){
  //   let url = process.env.API_URL+`editor/projectcode/${projectCode.id}/`;
  //   // console.log(url, projectCode)
  //         if (user.user.id===projectCode.project.creator){
  //           // setSaving(true);
  //             postDataAuth(url,user.access,{code:code1},'PATCH').then(data2 => {

  //                 }).catch(error => {
  //                   console.log(error,"error")
  //             })
  //         } else {
  //         }
  //       }
  // }

  // const temp = () => {
  //   let url = `http://127.0.0.1:8000/save-code/?code=${code}&container_name=${container}`
  //   fetch(url).then(async res=>{
  //     let data = await res.json();
  //     console.log(data);
      
  //   }).catch(err=>{console.log(err)})

  // }

  // React.useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     saveCodeToContainer();
  //   }, 500)

  //   return () => clearTimeout(timeout)
  // }, [code])

  // React.useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     updateCodeToDataBase();
  //   }, 2000)
  //   return () => clearTimeout(timeout)
  // }, [code])

  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
    myStateRef.current = value;
  }, []);

  return (
    <div>
      {/* <button onClick={handleThis}>Click here</button> */}
<Editor
      height="60vh"
      defaultLanguage={projectCode.lang?.prog_lang}
      defaultValue={code}
      theme="vs-light"
      onChange={onChange}
       options={{fontSize: "18px",
       readOnly: true,
      //  "folding": false,
        "lineDecorationsWidth": 8,
        "lineNumbersMinChars": 2,
       glyphMargin: false, minimap:{enabled : false}}}
    />

    </div>
  )
}

export default CodeMirrorEditor