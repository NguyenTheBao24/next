"use client";
import Tables from "@/componment/app.table";
import Link from "next/link";
import useSWR from "swr";
import Button from "react-bootstrap/esm/Button";
import { useSelector, useDispatch } from "react-redux";
import { addBlog } from "@/redux/blog/dataBlog";
import { AppDispatch, RootState } from "@/redux/store";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const count = useSelector<RootState>((state) => state.blogReducer);
  const dispatch = useDispatch<AppDispatch>();
  const onClick = () => {
    dispatch(addBlog(data[0]));




    
  };
  console.log(count);
  console.log(data);

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

      <Button variant="primary" onClick={onClick}>
        thêm
      </Button>

      <Tables></Tables>
    </>
  );
}
