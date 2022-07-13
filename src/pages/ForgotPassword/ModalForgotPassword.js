import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ErrorMessage } from "@hookform/error-message";
import Button from "react-bootstrap/Button";
import className from "classnames/bind";
import styles from "../Login/Login.module.scss";

const cx = className.bind(styles);

export const ModalForgotPassword = (props) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const email = useRef({});
  email.current = watch("email");
  const handleSubmitEmail = () => {
    alert(
      `Your email: ${email.current} has been submitted. Check your email for further instructions`
    );

    navigate("/resetpassword");
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body className={cx("modal-body")}>
        <Form>
          <Form.Group className="mb-3" controlId="reset-password">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Input your email address to recieve reset code"
              autoFocus
              {...register("email", {
                required: "You have to input your email ",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: " You entered wrong syntax EmailAdress",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p className={cx("text-error")}>{message}</p>}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSubmit(handleSubmitEmail)}>
          Submit
        </Button>
        <Button variant="success" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
