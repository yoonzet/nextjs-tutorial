import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
interface IMovie{
  id: number;
  original_title: string;
  poster_path:string;
}

export default function Home({results}:InferGetServerSidePropsType<GetServerSideProps>){
  const router = useRouter();
  const onClick = (id:number, title:string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title='Home'/>
      {results?.map((movie:IMovie) => (
            <div onClick={()=> onClick(movie.id, movie.original_title)} className="movie"  key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <Link href={`/movies/${movie.original_title}/${movie.id}`}
            >
              <a>
                <h4>{movie.original_title}</h4>
              </a>
            </Link>
            </div>
        ))}
        <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div> 
  );
}

export async function getServerSideProps(){ //getServerSideProps 이 이름은 절대 바뀌면 안됨.
  //이 안에 쓰는 코드는 server쪽(백엔드)에서만 작동하게 된다.(client에선 작동 x)
      const {results} = await ( await fetch(`http://localhost:3000/api/movies`)).json();
      return{
        props: {
            results,
        },
      };
}
