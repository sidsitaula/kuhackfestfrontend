import React from 'react'
import { useState } from 'react';
import styles from "../styles/Login.module.css"

const Login = () => {

    const [currentLogin, setCurrentLogin] = useState("student");

    let teacherButtonStyle = currentLogin === "teacher"? styles.teacherButton : styles.disabledButton;
    let studentButtonStyle = currentLogin === "student"? styles.studentButton : styles.disabledButton;
    let loginButtonStyle =
      currentLogin === "student"
        ? { backgroundColor: "#bc2aa9" }
        : { backgroundColor: "#2a60bc" };

    const teacherButtonToggle = ()=>{
        setCurrentLogin("teacher");
    }
    
    const studentButtonToggle = ()=>{
        setCurrentLogin("student");
    }

    const handleSignUp = ()=>{
        alert("Sign Up")
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

        <form className={styles.loginForm}>
          <input type="email" placeholder={"Enter Your Email"} />
          <input type="password" placeholder={"Enter Your Password"} />
          <button style={loginButtonStyle}>Login</button>
        </form>

        <h2 className={styles.footer}>
          Don't have an account yet? <span onClick={handleSignUp} className={styles.signUp}>Sign Up</span>
        </h2>
      </section>
    </div>
  );
}

export default Login