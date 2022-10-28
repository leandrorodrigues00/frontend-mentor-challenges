import styles from "./Header.module.css";

export function Header({
  numberUnreadNotifications,
  setNumberUnreadNotifications,
}) {
  function handleReadNotifications() {
    setNumberUnreadNotifications(0);
  }

  let isNotificationsEmpty = numberUnreadNotifications === 0;

  return (
    <header className={styles.header}>
      <div className={styles.notifications}>
        <span>Notifications</span>
        <strong>{numberUnreadNotifications}</strong>
      </div>
      <p onClick={handleReadNotifications} disabled={isNotificationsEmpty}>
        Mark all as read
      </p>
    </header>
  );
}
