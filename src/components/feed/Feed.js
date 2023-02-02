import React from "react";
import styles from "./styles.module.scss";
import Share from "../share/Share.js";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedwrapper}>
        <Share />
      </div>
    </div>
  );
};

export default Feed;
