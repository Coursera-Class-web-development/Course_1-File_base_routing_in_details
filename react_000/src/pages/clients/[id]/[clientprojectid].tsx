import {useRouter} from "next/router"


export default function SelectedClientProjectPage(){
    const router = useRouter();
    console.log(router.query)
    const temp = router.query
    return (
      <div>
        <h1>The project page for selected client</h1>
      </div>
    );
}