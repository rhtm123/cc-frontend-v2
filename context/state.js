
import React,{ createContext, useContext } from 'react';
// import { postData } from '../functions/auth';

const AppContext = createContext();



import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function AppWrapper({ children }) {

    // const [user, setUser] = React.useState();
    // const [userLoading, setUserLoading] = React.useState(true);

    // const getUser = () => {
    //   if (session){
    //       let url = process.env.API_URL + 'auth/get-user-email/';
    //       postData(url, {"email":session.user.email})
    //         .then(data => {
    //           setUser(data);
    //           // console.log(data);
    //           setUserLoading(true);
    //         }).catch(error => {
    //           console.log(error);
    //           setUserLoading(true)
    //       })
    //     } else {
    //       setUserLoading(false);
    //     }
    // }

    // React.useEffect(() => {
    //   getUser();
    //   setInterval(function() {
    //     getUser();
    //   }, 120000);
  
    // },[session]);
    
    let url4 = process.env.API_URL + `short-tutorial/short-tuts/?ordering=-created&is_published=true`;
    let url5 = process.env.API_URL + `course/course_list/?is_published=&course_type=self-paced&ordering=-updated`;
    
    const {data:programs} = useSWR(process.env.API_URL+'course/programs/?is_published=true', fetcher);
    const {data:events, error1} = useSWR(process.env.API_URL+"event/events/", fetcher);
    const {data:livecourses, error} = useSWR(process.env.API_URL + `course/course_list/?is_published=true&course_type=live&ordering=-updated`, fetcher);


    const {data:tutorials} = useSWR(url4, fetcher);
    const {data:selfpacedcourses, error2} = useSWR(url5, fetcher);

    let sharedState = {
        programs : programs,
        events: events,
        livecourses: livecourses,
        selfpacedcourses: selfpacedcourses,
        tutorials:tutorials,
        // user:user,
    }
      
  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}