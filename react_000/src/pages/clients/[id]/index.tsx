import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  function loadProjectHandler() {
    router.push(`/clients/max/projecta`);
  }
  return (
    <div>
      <h1>The projects of a given client</h1>
      <button>Load Project A</button>
    </div>
  );
}
