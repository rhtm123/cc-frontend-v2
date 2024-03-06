import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { ScholarshipNav } from "./BannerNav";
import WhatsApp from "./WhatsApp";

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


 {/* Google Tag (gtag.js) */}
 <script async src="https://www.googletagmanager.com/gtag/js?id=AW-876457015"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-876457015');
              `,
            }}
          />
          
        </Head>
    
            {!router.pathname.includes("scholarship") &&       <ScholarshipNav />}
            <Navbar />
            <WhatsApp />


            <main className="w">{children}</main>

            <br />
            <br />


            <Footer />

        </>
     );
}

export default Layout;