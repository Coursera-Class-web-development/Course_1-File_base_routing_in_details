import {useRouter} from "next/router"

export default function ProfolioProjectPage(){
    const router = useRouter();
    console.log(router.query)
    const temp = router.query
    return (
      <div>
        <h1>The Portfolio Project page</h1>
        <h1>The Dynamic page</h1>
      </div>
    );
}