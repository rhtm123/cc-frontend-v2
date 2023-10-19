
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// import { postData } from "../../../functions/auth";
import { postData } from "@/utils/auth";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  // pages: {
  //   signIn: '/signin',
  // },
  callbacks: {

    async signIn({ user, account, profile, credentials }) {

      let r = (Math.random() + 1).toString(36).substring(7);
      let url = process.env.API_URL +`auth/users/`;
      let firstname = profile.given_name
      let lastname = profile.family_name
      let email = profile.email
      // console.log(firstname, lastname, email);
      

      postData(url, {"password":r, "firstname":firstname, "lastname":lastname,"email":email}, "POST")
        .then(data => {
          // console.log("successful");
          // console.log(data)
          return true
        }).catch(error => {
          // console.log("Error")
          // console.log(error)
          return true
      })
      return true
    },

    
  },
  
})

// session {
//   user: {
//     name: 'Rohit Maurya Official',
//     email: 'maurya.iitk@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a-/AOh14GjgXIPjn0DMt3YZ9S6G6E_rjTW926YuaPZeZh2SlQ=s96-c'
//   },
//   expires: '2022-04-08T09:11:41.718Z',
//   accessToken: undefined
// }