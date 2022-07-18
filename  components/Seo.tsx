import Head from "next/head";

interface Title {
    title:string
}

export default function Seo({title}:Title){
    return(
        <Head>
        <title>{title} | Next Movies</title>
      </Head>
    );
    
}