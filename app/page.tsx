import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <div className="card">
        <p className="eyebrow">YOUR NEXT PROJECT STARTS HERE</p>
        <h1>Welcome to Nexts</h1>
        <p className="description">
          A clean, simple starting point built with Next.js. Make yourself at home
          and start creating something great.
        </p>
        <Link className="button" href="https://nextjs.org/docs">
          Explore the docs <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <footer>Built with Next.js</footer>
    </main>
  );
}
