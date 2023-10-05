import Image from "next/image";
import Link from "next/link";

export default function Test() {
  return (
    <main className="bg-red">
      <h1 className="bg-blue">howdy</h1>
      <Link href="/page">test</Link>
    </main>
  );
}
