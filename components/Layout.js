import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";


function Layout({children}) {
    let router = useRouter();

    if (router.pathname.includes("embed")){
        return (<div>
                  <main>{children}</main>
    
        </div>)
      }

    return ( 
        <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
            <Navbar />

            <main className="w">{children}</main>

            <br />
            <br />

            <Footer />

        </>
     );
}

export default Layout;