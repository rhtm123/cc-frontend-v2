import Footer from "./Footer";
import Navbar from "./Navbar";
function Layout({children}) {
    return ( 
        <>
            <Navbar />

            <main className="w">{children}</main>

            <br />
            <br />

            <Footer />

        </>
     );
}

export default Layout;