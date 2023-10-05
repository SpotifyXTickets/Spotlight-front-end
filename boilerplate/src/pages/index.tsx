import Link from "next/link";
import "../styles/pages/_home-page.scss";

export default function Home() {
  return (
    <main className="home-page">
      <h1 className="">Home page (src/pages/index.tsx)</h1>
      <Link href="/page">link showing route to different page</Link>
    </main>
  );
}
