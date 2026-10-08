import Link from "next/link";
import styles from "./Button.module.css";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  showIcon?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  showIcon = true,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  const content = (
    <>
      <span>{children}</span>
      {showIcon && <ArrowRightIcon className={styles.icon} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
}