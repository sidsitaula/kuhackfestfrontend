import React from "react";
import { useState } from "react";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {

    const sidebarMenuItems = [
      { title: "Resources", id: 1 },
      { title: "Discussion", id: 2 },
      { title: "Assignments", id: 3 },
      { title: "People", id: 4 },
    ];

    const PLACEHOLDER_IMAGE_URL =
      "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  return (
    <div className={styles.mainBody}>
      <section className={styles.sidebar}>
        <section className={styles.sidebarLogo}>LOGO PLACEHOLDER</section>
        {
            sidebarMenuItems.map((item)=>{
                return <h1 className={styles.sidebarItems} key={item.id}>{item.title}</h1>
            })
        }
        <hr />
        <h1 className={styles.sidebarItems}>Settings</h1>
        <h1 className={styles.sidebarItems}>Logout</h1>
      </section>

      <section className={styles.mainSection}>
        <nav className={styles.navbar}>
          <h1 className={styles.greeting}>{`Welcome Back, ${name.split(" ")[0]}!`}</h1>
          <section className={styles.userInfo}>
            <div className={styles.info}>
              <h2>{name}</h2>
              <h3>{email}</h3>
            </div>
            <div className={styles.pic}>
                <img src={PLACEHOLDER_IMAGE_URL} alt={name} />
            </div>
          </section>
        </nav>
        Main
      </section>
    </div>
  );
};

export default Dashboard;
