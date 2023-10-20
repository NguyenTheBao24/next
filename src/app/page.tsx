"use client";
import Tables from "@/componment/app.table";
import Link from "next/link";
import useSWR from "swr";
import Button from "react-bootstrap/esm/Button";
import { useSelector, useDispatch } from "react-redux";
import { addBlog } from "@/redux/blog/dataBlog";
import { AppDispatch, RootState } from "@/redux/store";
import Creatmodal from "@/componment/creat.modal";
import { close, view } from "@/redux/creatmodal/creatmodal";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const isShow = useSelector((state: RootState) => state.creatmodalReducer);
  console.log(isShow);

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const dispatch = useDispatch<AppDispatch>();
  const onClick = () => {
    dispatch(addBlog(data));
    // dispatch(close())
  };
  const hanldShowCreatModal= ()=>{
    dispatch(view())
  }

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>table</h3>
        <Button onClick={hanldShowCreatModal} variant="secondary">Addnew</Button>
      </div>

      <Tables></Tables>
      <Creatmodal></Creatmodal>
    </>
  );
}
