import React from "react";
import { useState } from "react";

import styles from "./ChartBar.module.css";

export function ChartBar({ hasActive, height, text, amount }) {
  const [visibleAmountMon, setVisibleAmountMon] = useState(false);

  return (
    <li className={styles.listElement}>
      {visibleAmountMon ? (
        <div className={styles.dayAmount}>${amount}</div>
      ) : (
        ""
      )}
      <div
        onMouseOver={() => setVisibleAmountMon(true)}
        onMouseLeave={() => setVisibleAmountMon(false)}
        className={
          hasActive ? `${styles.chart} ${styles.active} ` : styles.chart
        }
        style={{
          height: `${height}px`,
        }}
      ></div>

      <span>{text}</span>
    </li>
  );
}
