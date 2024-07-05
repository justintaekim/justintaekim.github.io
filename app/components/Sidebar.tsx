import Image from "next/image";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside
      className={`${styles.sidebar} flex-shrink-0 text-white p-4 lg:w-1/3 lg:h-screen lg:fixed`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/images/headshot.png"
          alt="Profile Picture"
          className="rounded-full"
          width={150}
          height={150}
        />
        <h1 className="text-3xl font-bold mt-4">I am Justin</h1>
        <p className="text-center mt-2">
          A super simple responsive site template freebie crafted by HTML5 UP.
        </p>
      </div>
    </aside>
  );
}
