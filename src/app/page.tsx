"use client";
import Tables from "@/componment/app.table";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href={"/fb"}>fb</Link>
        </li>
        <li>
          <Link href={"/yt"}>yt</Link>
        </li>
        <li>
          <Link href={"/tiktok"}>tiktok</Link>
        </li>
      </ul>

      <Tables></Tables>
    </>
  );
}
