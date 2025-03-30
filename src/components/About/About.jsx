import React from "react";
import styles from "../About/About.module.css";
import aboutImage from "../../../assets/about/aboutImage.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Workspace setup"
          className={styles.mainImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={cursorIcon}
              alt="Frontend development icon"
              className={styles.itemIcon}
            />
            <div className={styles.itemContent}>
              <h3>FrontEnd Developer</h3>
              <p>
                I'm a passionate FrontEnd Developer focused on
                creating intuitive and dynamic user experiences.
                Proficient in modern technologies including React,
                TypeScript, and CSS-in-JS solutions. I specialize in
                transforming complex problems into elegant,
                user-friendly solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={serverIcon}
              alt="Server administration icon"
              className={styles.itemIcon}
            />
            <div className={styles.itemContent}>
              <h3>Linux Administrator</h3>
              <p>
                Experienced in managing enterprise-level server
                infrastructure. Skilled in performance optimization,
                security hardening, and automating deployments using
                modern DevOps practices and tools.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={uiIcon}
              alt="UI/UX design icon"
              className={styles.itemIcon}
            />
            <div className={styles.itemContent}>
              <h3>UI/UX Specialist</h3>
              <p>
                Award-winning designer focused on creating cohesive
                user experiences. Combining technical expertise with
                aesthetic sensibility to deliver pixel-perfect
                implementations of design systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
