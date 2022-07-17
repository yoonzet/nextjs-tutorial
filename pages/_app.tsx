import NavBar from "../ components/NavBar";

export default function App({Component, pageProps}:any){
    return(
        <>
            <NavBar/>
            <Component {...pageProps}/>
            <style jsx global>{`
                a { 
                    color: pink;
                }
            `}</style>
        </>
    ) 
}