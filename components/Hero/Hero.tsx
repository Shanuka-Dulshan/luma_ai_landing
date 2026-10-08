import Image from "next/image";
import Button from "@/components/Button/Button";
import StarIcon from "@/components/icons/StarIcon";
import LogomarkIcon from "@/components/icons/LogomarkIcon";
import styles from "./Hero.module.css";

const avatars = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>
        <LogomarkIcon width={12} height={12} />
        <span>The AI platform built for real teams</span>
      </div>

      <h1 className={styles.heading}>
        <span className={styles.line}>AI that understands.</span>
        <span className={styles.line}>
          Results that <em>grow.</em>
        </span>
      </h1>

      <p className={styles.subtext}>
        Automate workflows, surface insights, and work smarter with AI that
        adapts to your business
      </p>

      <div className={styles.actions}>
        <Button variant="primary" href="/signup">
          Start free trial
        </Button>
        <Button variant="secondary" href="/demo" showIcon={false}>
          Book a demo
        </Button>
      </div>

      <div className={styles.socialProof}>
        <div className={styles.avatarStack}>
          {avatars.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
              style={{ zIndex: avatars.length - i }}
            />
          ))}
        </div>

        <div className={styles.rating}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} aria-hidden="true" />
          ))}
        </div>

        <span className={styles.trustText}>
          Trusted by 10,000+ teams worldwide
        </span>
      </div>
    </section>
  );
}