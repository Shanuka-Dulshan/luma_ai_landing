import Image from "next/image";
import styles from "./DashboardPreview.module.css";

export default function DashboardPreview() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.crop}>
        <Image
          src="/images/dashboard-img.png"
          alt="Luma dashboard preview"
          width={1890}
          height={1000}
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
}