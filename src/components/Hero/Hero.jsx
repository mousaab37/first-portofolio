import React from "react";
// import { getImageUrl } from "../../utlis";
import styles from "../Hero/Hero.module.css";
import heroImg from "../../../assets/hero/heroImage.png";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi ,I'm Mosaab</h1>
        <p className={styles.description}>
          Recent Electronics and Communications Engineering graduate
          with expertise in Linux, networking, Python, Docker,SQL.
          Ready to contribute to support roles or training programs.
        </p>
        <a
          href="mailto:maosaiabal@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={heroImg}
        alt="hero img of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
