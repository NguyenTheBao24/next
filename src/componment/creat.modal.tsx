"use client ";

import { close, view } from "@/redux/creatmodal/creatmodal";
import { AppDispatch, RootState } from "@/redux/store";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { toast } from "react-toastify";

function Creatmodal() {
  const isShow = useSelector((state: RootState) => state.creatmodalReducer);

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [conten, setContet] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    setAuthor("");
    setContet("");
    setTitle("");
    dispatch(close());
  };
  const handlSave = () => {
    if (!author) {
      toast.error("ban da nhap thieu author");
    } else if (!title) {
      toast.error("ban da nhap thieu title");
    } else if (!conten) {
      toast.error("ban da nhap thieu conten");
    } else {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, author: author, conten: conten }),
      })
        .then((res) => res.json())
        .then((res) => {
          toast.success("ban da them thanh cong");
          dispatch(close());
        });
    }

    setAuthor("");
    setContet("");
    setTitle("");
  };
  return (
    <>
      <Modal
        show={isShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>add New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Conten</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={conten}
                onChange={(e) => setContet(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Creatmodal;
