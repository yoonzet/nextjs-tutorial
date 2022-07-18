import { useRouter } from "next/router";
import Seo from "../../components/Seo";

interface IParams{
    params:any;
}

export default function Detail({params}:IParams){
    const router = useRouter();
    const [title, id] = params || []; // || []를 적어주는 이유는 브라우저의  시크릿모드에서는 server에 router.query.params존재하지 않기 때문이다. 그렇기 때문에 배열을 넣어줘야 에러가 생기지 않는다. 
    return (
        <div>
            <Seo title={title}/>
            <h4>{title}</h4>
        </div>
    );
}

export function getServerSideProps({params:{params}}:IParams){

    return {
        props: {
            params,
        },
    }
}