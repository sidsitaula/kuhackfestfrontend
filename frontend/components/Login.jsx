import React from 'react'
import { useState } from 'react';
import styles from "../styles/Login.module.css"
import { useRouter } from 'next/router';

const Login = () => {

    const [currentLogin, setCurrentLogin] = useState("student");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    let teacherButtonStyle = currentLogin === "teacher"? styles.teacherButton : styles.disabledButton;
    let studentButtonStyle = currentLogin === "student"? styles.studentButton : styles.disabledButton;
    let loginButtonStyle =
      currentLogin === "student"
        ? { backgroundColor: "#bc2aa9" }
        : { backgroundColor: "#2a60bc" };
    let loginButtonText = currentLogin === "student"? "Login As Student" : "Login As Teacher";

    const teacherButtonToggle = ()=>{
        setCurrentLogin("teacher");
        setEmail("");
        setPassword("");
    }
    
    const studentButtonToggle = ()=>{
        setCurrentLogin("student");
        setEmail("");
        setPassword("");
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        //TODO:: PUSH DATA TO SERVER
    }

    const handleSignUp = ()=>{
        router.push("/register")
    }
    
  return (
    <div className={styles.mainBody}>
      <section className={styles.leftPanel}>Left</section>

      <section className={styles.rightPanel}>
        <section className={styles.loginHead}>
          <h1>{"Hello Again!"}</h1>
          <h2>{"Please Login With Your Credentials"}</h2>
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
          <button style={loginButtonStyle}>{loginButtonText}</button>
        </form>

        <h2 className={styles.footer}>
          Don't have an account yet?{" "}
          <span onClick={handleSignUp} className={styles.signUp}>
            Sign Up
          </span>
        </h2>
      </section>
    </div>
  );
}

export default Login