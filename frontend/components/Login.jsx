import React from 'react'
import { useState } from 'react';
import styles from "../styles/Login.module.css"

const Login = () => {

    const [currentLogin, setCurrentLogin] = useState("student");

    let teacherButtonStyle = currentLogin === "teacher"? styles.teacherButton : styles.disabledButton;
    let studentButtonStyle = currentLogin === "student"? styles.studentButton : styles.disabledButton;

    const teacherButtonToggle = ()=>{
        setCurrentLogin("teacher");
    }
    
    const studentButtonToggle = ()=>{
        setCurrentLogin("student");
    }
    
  return (
    <div className={styles.mainBody}>
      <section className={styles.leftPanel}>Left</section>

      <section className={styles.rightPanel}>
        <section className={styles.buttonRow}>
          <button className={teacherButtonStyle} onClick={teacherButtonToggle}>
            Teacher
          </button>
          <button className={studentButtonStyle} onClick={studentButtonToggle}>
            Student
          </button>
        </section>

        <section className={styles.loginHead}>
            <h1>Hello Again</h1>
        </section>
      </section>
    </div>
  );
}

export default Login