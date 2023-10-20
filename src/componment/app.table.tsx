" use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import stype from "../style/app.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";

function Tables() {
  const [isView, setIsView] = useState(false);
  const blog = useSelector((state: RootState) => state.blogReducer);

  
  const handlIsView = () => {
    setIsView(!isView);
  };

  return (
    <Table striped bordered hover className={stype["red"]}>
      <thead>
        <tr>
          <th>NO</th>
          <th>author</th>
          <th>title</th>
          {isView && <th> conten</th>}

          <th> Action </th>
        </tr>
      </thead>
      <tbody>
        {blog.map((blog, index) => (
          <tr key={index}>
            <td>{blog.id}</td>
            <td>{blog.author}</td>
            <td>{blog.title}</td>
            {isView && <td>{blog.content}</td>}
            <td style={{ display: "flex" }}>
              <Button variant={"primary"} onClick={handlIsView}>
                View
              </Button>
              <Button variant={"warning"} className="mx-3">
                Edit{" "}
              </Button>
              <Button variant={"danger"}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tables;
