import React from "react";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";

const Topbar = () => {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span className={styles.logo}>Social App</span>
      </div>
      <div className={styles.topbarCentre}>
        <SearchIcon />
        <input className={styles.searchInput} placeholder="Search For" />
      </div>

      <div className={styles.topbarRight}></div>
      <div className={styles.topbarLinks}>
        <span className={styles.topbarLink}>Homepage</span>
        <span className={styles.topbarLink}>Timeline</span>
      </div>
      <div className={styles.topbarIcons}>
        <div className={styles.topbarIconItem}>
          <PersonIcon />
          <span className={styles.topbarIconBadge}>1</span>
        </div>
        <div className={styles.topbarIconItem}>
          <ChatBubbleIcon />
          <span className={styles.topbarIconBadge}>1</span>
        </div>
        <div className={styles.topbarIconItem}>
          <NotificationAddIcon />
          <span className={styles.topbarIconBadge}>1</span>
        </div>
      </div>
      <img src="" alt="" className={styles.topbarImg} />
    </div>
  );
};

export default Topbar;
