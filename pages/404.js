import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      router.push("/")
    },3000)
     
  }, [])
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
        </ul>
      </nav>

      <h1>404 - Page Not Found</h1>
      <br />
      {/* <a onClick={() => router.push("/")}> Go to home page</a> */}
      <Link href="/">go to home page</Link>
    </>
  );
}
