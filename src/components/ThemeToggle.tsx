"use client";

import { useState } from "react";
import styles from "./theme-toggle.module.scss";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }

  return (
    <button
      className={styles.toggle}
      type="button"
      aria-pressed={theme === "light"}
      onClick={toggleTheme}
    >
      Theme: {theme}
    </button>
  );
}
