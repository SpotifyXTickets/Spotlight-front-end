// src/pages/page.tsx

import Link from "next/link";
import * as winston from "winston";

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

export default function Page() {
  logger.info("Hello, logging world!"); // Log an information message

  return (
    <main className="">
      <h1>Empty page (src/pages/page.tsx)</h1>
      <Link className="" href="/">
        Link back to home page
      </Link>
    </main>
  );
}
