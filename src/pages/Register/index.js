import className from "classnames/bind";
import styles from "./Register.module.scss";
import logo from "../../assets/logo-tma.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRef } from "react";

const cx = className.bind(styles);

export const Register = () => {
  const navigate = useNavigate();
  const handleBackToLogin = () => {
    navigate("/login");
  };
  //validate Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const email = useRef({});
  email.current = watch("email");
  const username = useRef({});
  username.current = watch("username");
  const password = useRef({});
  password.current = watch("password");
  const passwordConfirm = useRef({});
  passwordConfirm.current = watch("passwordConfirm");

  // console.log("EMAIL " + JSON.stringify(email));
  // console.log("PASSWORD " + JSON.stringify(password));

  // const [formInput, setFormInput] = useState({
  //   email: "",
  //   username: "",
  //   password: "",
  //   passwordConfirm: "",
  // });
  // const handleChange = (e) => {
  //   const target = e.target;
  //   const name = target.name;
  //   const value = target.value;
  //   setFormInput((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  const handleCreateNewAccount = (e) => {
    // e.preventDefault();
    alert(`${JSON.stringify(e)}`);
    reset({ ...getValues, email: "", username: "", password: "", passwordConfirm: "" });
  };
  return (
    <div className={cx("container-fluid", "register-container")}>
      <div className={cx("container", "container-content")}>
        <div className={cx("row")}>
          <div className={cx("content-left col-md-7")}>
            <div className={cx("brand")}>
              <img src={logo} alt="TMA-s Logo" />
            </div>
            <div className={cx("detail")}>TMA's RECRUITMENT TOOL V1.0</div>
          </div>
          <div className={cx("content-right", "col-md-5")}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="mb-3">
                <label className="form-label" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  // name="email"
                  id="emailAddress"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "You have to input your email",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: " You entered wrong syntax EmailAdress",
                    },
                  })}
                ></input>
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => <p className={cx("text-error")}>{message}</p>}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="userName">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="userName"
                  placeholder="User Name"
                  {...register("username", {
                    required: "You have to input your username",
                    minLength: {
                      value: 3,
                      message: "User Name must be at least 3 characters",
                    },
                  })}
                ></input>
                <ErrorMessage
                  errors={errors}
                  name="username"
                  render={({ message }) => <p className={cx("text-error")}>{message}</p>}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "You have to input your password",
                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                  })}
                ></input>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => <p className={cx("text-error")}>{message}</p>}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="passwordConfirm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  placeholder="Confirm Password"
                  {...register("passwordConfirm", {
                    required: "Please confirm your password",
                    validate: (value) => value === password.current || "The passwords do not match",
                  })}
                ></input>
                <ErrorMessage
                  errors={errors}
                  name="passwordConfirm"
                  render={({ message }) => <p className={cx("text-error")}>{message}</p>}
                />
              </div>
              <button
                type="submit"
                className="btn login btn-success mt-3 col-12 mx-auto"
                onClick={handleSubmit(handleCreateNewAccount)}
              >
                Create new account
              </button>
              <button className="btn btn-success mt-3 col-12 mx-auto" onClick={handleBackToLogin}>
                Already have an account. Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};