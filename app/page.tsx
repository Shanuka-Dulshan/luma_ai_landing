import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import DashboardPreview from "@/components/DashboardPreview/DashboardPreview";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.viewportSection}>
      <Header />
      <section className={styles.fold}>
        <video
          className={styles.bgVideo}
          src="/videos/bg.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.foldContent}>
          <Hero />
          <DashboardPreview />
        </div>
      </section>
    </div>
  );
}