import Link from "next/link";
import LogoIcon from "@/components/icons/LogoIcon";
import Button from "@/components/Button/Button";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" aria-label="Luma home">
          <LogoIcon />
        </Link>
      </div>

      <nav className={styles.nav} aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        <Button variant="secondary" showIcon={false}>Learn more</Button>
        {/* no icon */}
        <Button variant="primary">Start free trial</Button>
        {/* icon shows — default */}
      </div>
    </header>
  );
}