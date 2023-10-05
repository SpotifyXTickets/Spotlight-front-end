import Link from "next/link";
import "../styles/test.scss";

export default function Home() {
  return (
    <main className="test-page">
      <Link className="test-page__link" href="/">
        test
      </Link>
    </main>
  );
}
