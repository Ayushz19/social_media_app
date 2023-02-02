import React from "react";
import styles from "./styles.module.scss";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";



const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarlist}>
          <li className={styles.sidebarlistitem}>
            <RssFeedIcon className={styles.sidebaricon} />
            <span className={styles.sidebarlistitemtext}>Feed</span>
          </li>
          <li className={styles.sidebarlistitem}>
            <GroupIcon className={styles.sidebaricon} />
            <span className={styles.sidebarlistitemtext}>Groups</span>
          </li>
          <li className={styles.sidebarlistitem}>
            <BookmarkIcon className={styles.sidebaricon} />
            <span className={styles.sidebarlistitemtext}>Bookmark</span>
          </li>
          <li className={styles.sidebarlistitem}>
            <HelpOutlineIcon className={styles.sidebaricon} />
            <span className={styles.sidebarlistitemtext}>HelpOutline</span>
          </li>
          <li className={styles.sidebarlistitem}>
            <WorkOutlineIcon className={styles.sidebaricon} />
            <span className={styles.sidebarlistitemtext}>Jobs</span>
          </li>
          <li className={styles.sidebarlistitem}>
            <EventIcon className={styles.sidebaricon} />
            <span className={styles.sidebarlistitemtext}>Events</span>
          </li>
        </ul>
        <button className={styles.sidebarbutton}>Show More</button>
        <hr className={styles.sidebarhr} />
        <ul className={styles.sidebarfriendlist}>
          <li className={styles.sidebarfriend}>
            <img
              className={styles.sidebarimage}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.sidebarfname}>Ayush</span>
          </li>
          <li className={styles.sidebarfriend}>
            <img
              className={styles.sidebarimage}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.sidebarfname}>Ayush</span>
          </li>
          <li className={styles.sidebarfriend}>
            <img
              className={styles.sidebarimage}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.sidebarfname}>Ayush</span>
          </li>
          <li className={styles.sidebarfriend}>
            <img
              className={styles.sidebarimage}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.sidebarfname}>Ayush</span>
          </li>
          <li className={styles.sidebarfriend}>
            <img
              className={styles.sidebarimage}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.sidebarfname}>Ayush</span>
          </li>
          <li className={styles.sidebarfriend}>
            <img
              className={styles.sidebarimage}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.sidebarfname}>Ayush</span>
          </li>
          <li className={styles.sidebarfriend}>
            <img
              className={styles.sidebarimage}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.sidebarfname}>Ayush</span>
          </li>
          <li className={styles.sidebarfriend}>
            <img
              className={styles.sidebarimage}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.sidebarfname}>Ayush</span>
          </li>
          <li className={styles.sidebarfriend}>
            <img
              className={styles.sidebarimage}
              src="/assets/person/2.jpg"
              alt=""
            />
            <span className={styles.sidebarfname}>Ayush</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
