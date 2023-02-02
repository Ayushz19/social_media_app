import React from 'react';
import Topbar from "../../components/topbar/Topbar.jsx"
import Sidebar from "../../components/sidebar/Sidebar.js";
import Rightbar from "../../components/rightbar/Rightbar.js"
import Feed from "../../components/feed/Feed.js";
import styles from "./styles.module.scss"
const Home = () => {
  return (
    <div>
      <Topbar />
      <div className={styles.homeContainer}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
