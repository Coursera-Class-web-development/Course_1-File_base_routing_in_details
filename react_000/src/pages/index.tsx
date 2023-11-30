import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>The Home page</h1>
      <ul>
        <li>
          {/* <a href="/portfolio">Portfolio</a> */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}
