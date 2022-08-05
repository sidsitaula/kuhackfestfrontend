import React from "react";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [currentLogin, setCurrentLogin] = useState("student");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const router = useRouter();

  let teacherButtonStyle =
    currentLogin === "teacher" ? styles.teacherButton : styles.disabledButton;
  let studentButtonStyle =
    currentLogin === "student" ? styles.studentButton : styles.disabledButton;
  let loginButtonStyle =
    currentLogin === "student"
      ? { backgroundColor: "#bc2aa9" }
      : { backgroundColor: "#2a60bc" };
  let loginButtonText =
    currentLogin === "student" ? "Register As Student" : "Register As Teacher";

  const teacherButtonToggle = () => {
    setCurrentLogin("teacher");
    setEmail("");
    setPassword("");
  };

  const studentButtonToggle = () => {
    setCurrentLogin("student");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !username || !email || !password || !Cpassword){
        toast.error("Please Completely Fill in the form");
    }
    if (password != Cpassword) {
      toast.error("Passwords Do Not Match");
      setCPassword("");
    }

    //TODO:: PUSH DATA TO SERVER
  };

  const handleSignUp = () => {
    router.push("/register");
  };

  return (
    <div className={styles.mainBody}>
      <section className={styles.leftPanel}>Left</section>

      <section className={styles.rightPanel}>
        <section className={styles.loginHead}>
          <h1>{"Hello There!"}</h1>
          <h2>{"Please Register To Use Our Service"}</h2>
          <ToastContainer />
        </section>

        <section className={styles.buttonRow}>
          <button className={teacherButtonStyle} onClick={teacherButtonToggle}>
            Teacher
          </button>
          <button className={studentButtonStyle} onClick={studentButtonToggle}>
            Student
          </button>
        </section>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={"Enter Your Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder={"Choose a username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder={"Enter Your Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder={"Enter Your Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder={"Confirm Your Password"}
            value={Cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />

          <button style={loginButtonStyle}>{loginButtonText}</button>
        </form>
      </section>
    </div>
  );
};

export default Register;
