import styles from "./App.module.css";
import { ChartBar } from "./components/ChartBar";
import { Header } from "./components/Header";

function App() {
  const day = new Date();
  let dayOfWeek = day.getDay();

  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.chartContainer}>
        <header>
          <span className={styles.chartTitle}>Spending - Last 7 days</span>
        </header>

        <div className={styles.chart}>
          <ul className={styles.listWeekDays}>
            <ChartBar
              hasActive={dayOfWeek === 1 ? true : false}
              height={50}
              text={"mon"}
              amount={17.45}
            />
            <ChartBar
              hasActive={dayOfWeek === 2 ? true : false}
              height={100}
              text={"tue"}
              amount={34.91}
            />
            <ChartBar
              hasActive={dayOfWeek === 3 ? true : false}
              height={140}
              text={"wed"}
              amount={52.36}
            />
            <ChartBar
              hasActive={dayOfWeek === 4 ? true : false}
              height={90}
              text={"thu"}
              amount={31.07}
            />
            <ChartBar
              hasActive={dayOfWeek === 5 ? true : false}
              height={65}
              text={"fri"}
              amount={23.39}
            />
            <ChartBar
              hasActive={dayOfWeek === 6 ? true : false}
              height={120}
              text={"sat"}
              amount={43.28}
            />

            <ChartBar
              hasActive={dayOfWeek === 0 ? true : false}
              height={70}
              text={"sun"}
              amount={25.48}
            />
          </ul>
        </div>

        <footer className={styles.chartFooter}>
          <div className={styles.totalAmountCurrent}>
            <p>Total this month</p>
            <strong>$478.33</strong>
          </div>

          <div className={styles.totalAmountLast}>
            <span>+2.4%</span>
            <p>from last month</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
