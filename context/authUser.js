
// UserContext.js
import React, { createContext, useContext, useState } from 'react';
import { useSession } from "next-auth/react";
import { postData } from '@/utils/auth';


const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const { data: session } = useSession();


      const fetchUser = () => {
      if (session){
          let url = process.env.API_URL + 'auth/get-user-email/';
          postData(url, {"email":session.user.email})
            .then(data => {
              setUser(data);
              // console.log(data);
            //   setUserLoading(true);
            }).catch(error => {
              // console.log(error);
            //   setUserLoading(true)
          })
        } else {
        //   setUserLoading(false);
        }
    }



    React.useEffect(() => {
        fetchUser();
        // Create an interval that increments the count every second
        const interval = setInterval(() => {
            fetchUser();
        }, 120000);
    
        // Return a cleanup function to clear the interval when the component unmounts
        return () => {
          clearInterval(interval);
        };
      }, [session]); // Empty dependency array ensures that this effect runs only on component mount and unmount
    

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
