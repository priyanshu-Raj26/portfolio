import type { ContentLink } from "../../content/types";
import styles from "./optional-link.module.scss";

export default function OptionalLink({
  label,
  href,
  className,
  showValue = false,
  isEmail = false
}: {
  label: string;
  href: ContentLink;
  className?: string;
  showValue?: boolean;
  isEmail?: boolean;
}) {
  if (href.isTodo) {
    if (process.env.NODE_ENV !== "development") {
      return null;
    }

    return (
      <span className={`${styles.unavailableLink} ${className ?? ""}`}>
        <span>{label}</span>
        <span
          className={styles.dashedMarker}
          aria-label={`${label} is not available yet`}
        />
      </span>
    );
  }

  const destination = isEmail ? `mailto:${href.value}` : href.value;
  const opensNewTab = destination.startsWith("https://");

  return (
    <a
      className={className}
      href={destination}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer" : undefined}
    >
      {showValue ? href.value : label}
      {opensNewTab && <span aria-hidden="true"> ↗</span>}
    </a>
  );
}
