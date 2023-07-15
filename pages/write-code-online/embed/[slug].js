import Error404 from "@/components/Error404";
import Head from "next/head";
import CCEditorWrapperEmbed from "@/components/CCEditorWrapperEmbed";

function WriteCodeOnlineEmbed({data, error}) {

    if (error) return (<Error404 />);
    return ( 
        <>
        <Head>
        <meta name="robots" content="noindex" />

        </Head>

        <CCEditorWrapperEmbed project={data} embed={true} />

        </>

     );
}


export async function getServerSideProps(context) {
    const {slug} = context.params;
    const url = process.env.API_URL+"editor/project/"+slug;
  
    // console.log(url);
  
    const res = await fetch(url)
    const error = res.ok ? false : true
    const data = await res.json()
  
  
    return { 
        props: { 
            data:data, error:error
        } 
  
    }
  }
  
export default WriteCodeOnlineEmbed;