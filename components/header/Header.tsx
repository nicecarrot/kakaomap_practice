import { LOGO, NAVI_CONTENTS } from "../constant";
import styles from "../../styles/header/_header.module.scss";
import Link from "next/link";
import SearchForm from "./SearchForm";
import { useState } from "react";

const DROPDOWN = <i className="fa-solid fa-caret-down"></i>;

const Header = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          {/* NextJS는 경로간의 이동을 위해 Link 컴포넌트를 제공합니다. react-router-dom 안써도 됩니다. */}
          <Link href="/">
            <a>
              <h2>{LOGO}</h2>
            </a>
          </Link>
        </div>
        {/* 여러분들이 더 있었으면 하는 nav를 추가해주세요! */}
        <nav className={styles.nav}>
          {NAVI_CONTENTS.map((content, idx) => (
            <Link href="/brands/[brand]" as={`/brands/${content}`} key={idx}>
              <a>
                <span key={idx}>{content}</span>
              </a>
            </Link>
          ))}
        </nav>
        <div
          className={styles.toggle}
          onClick={() => setIsShow((prev) => !prev)}
        >
          {DROPDOWN}
        </div>
      </div>
      {isShow && <SearchForm></SearchForm>}
    </header>
  );
};

export default Header;
