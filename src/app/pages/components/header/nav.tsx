import Link from "next/link";

export default function Nav() {
  return (
    <nav className="inline-flex space-between">
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/blog">Blog</Link>
			<Link href="/pricing">Pricing</Link>
			<Link href="/contact" className="decoration-2 decoration-solid decoration-inherit">Contact us ➜</Link>
    </nav>
  );
}
