import { createRef } from "react";
import styles from "./styles.module.css";

const GooHeader = () => {
  const ref = createRef();

  const handleMouseOver = (e) => {
    if (e.target.className === "anchor") {
      const id = e.target.id;
      const items = ref.current.childNodes;
      items.forEach((item) => (item.className = ""));
      items[id].className = styles.hover;
    }
  };

  const handleMouseOut = (e) => {
    if (e.target.className === "anchor") {
      const items = ref.current.childNodes;
      items.forEach((item) => (item.className = ""));
    }
  };

  return (
    <div className={styles.gooHeader}>
      <nav>
        <aside className={styles.goo}>
          <ul ref={ref}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </aside>
        <ul
          className={styles.menu}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <li>
            <a href="#a" className="anchor" id="0">
              <svg viewBox="0 0 24 24">
                <use href="#home" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#s" className="anchor" id="1">
              <svg viewBox="0 0 24 24">
                <use href="#heart" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#d" className="anchor" id="2">
              <svg viewBox="0 0 24 24">
                <use href="#bag" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#d" className="anchor" id="3">
              <svg viewBox="0 0 24 24">
                <use href="#settings" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <svg viewBox="0 0 24 24">
        <filter id="schlurp">
          <feGaussianBlur id="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
       1 0 0 0 0
       0 1 0 0 0
       0 0 1 0 0 
       0 0 0 20 -10
    "
          />
        </filter>

        <defs>
          <g id="home">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </g>
          <g id="heart">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </g>
          <g id="bag">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </g>
          <g id="settings">
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </g>
        </defs>
      </svg>
    </div>
  );
};

export default GooHeader;
