import Image from "next/image";
import styles from "./Sidebar.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <aside
      className={`${styles.sidebar} flex-shrink-0 text-white p-20 lg:w-1/3 lg:h-screen lg:fixed`}
    >
      <div className="flex flex-col items-center lg:items-end justify-center h-full">
        <Image
          src="/images/headshot.png"
          alt="Profile Picture"
          className="rounded-full shadow-2xl"
          width={150}
          height={150}
        />
        <h1 className="text-3xl font-bold mt-4">I am Justin</h1>
        <p className="text-center mt-2">Software Engineer</p>

        {/* Icons */}
        <div className="flex space-x-4 mt-10">
          <a
            href="https://www.linkedin.com/in/justintaekim"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBounce}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="mailto:justinkim607@berkeley.edu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBounce}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            href="https://github.com/justintaekim"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBounce}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/justinn_kimm/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBounce}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        <p className="mt-4 text-xs">
          Copyright © 2024 Justin Kim. All Rights Reserved.
        </p>
      </div>
    </aside>
  );
}
