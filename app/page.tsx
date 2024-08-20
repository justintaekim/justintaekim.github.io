"use client";

import Image from "next/image";
import useFetchFact from "./hooks/useFetchFact";
import ExperienceCard from "./components/ExperienceCard";

export default function Home() {
  const { fact, error, loading } = useFetchFact();

  return (
    <div className="p-8">
      {/* About Me */}
      <section className="my-10">
        <h2 className="text-4xl font-bold">About me</h2>
        <p className="my-4 text-lg">
          Hello, welcome! My name is Justin, and I am a recent UC Berkeley
          graduate with a degree in Computer Science. I am passionate about
          developing innovative solutions and projects that provides convenience
          and enhances people&apos;s daily lives.
        </p>
        <p className="my-4 text-lg">
          In my free time, I enjoy hanging out with friends, traveling places I
          haven&apos;t been to, watch poker tournament videos, and going to the
          gym. I am also a huge Chipotle fan. Ask me how much Chipotle rewards
          points I have!
        </p>

        {/* Resume */}
        <div className="pt-5">
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/11uuy07ZS5K6XjhC8_5NqIN7pm36SGGQL/view?usp=sharing",
                "_blank"
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Resume
          </button>
        </div>
      </section>
      <hr />

      {/* Education */}
      <section className="my-10">
        <h2 className="text-4xl font-bold">Education</h2>
        <div className="my-8 flex items-center">
          <Image
            src="/images/berkeley.png"
            alt="School Seal"
            width={80}
            height={80}
            className="mr-6"
          />
          <div className="mr-4">
            <h3 className="text-2xl font-semibold">
              University of California, Berkeley
            </h3>
            <p className="text-lg italic">
              Bachelor&apos;s degree in Computer Science
            </p>
            <p className="text-base">May 2024</p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium mt-2">Relevant Coursework:</h4>
          <ul className="list-disc list-inside ml-4 columns-2">
            <li>Data Structures</li>
            <li>Computer Architecture</li>
            <li>Efficient Algorithms</li>
            <li>Database Management</li>
            <li>Artificial Intelligence</li>
            <li>Data Science Principles</li>
            <li>Computer Security</li>
            <li>Web Design</li>
          </ul>
        </div>
      </section>
      <hr />

      {/* Experience */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center lg:text-left">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
          <ExperienceCard
            src="/images/swiift.png"
            alt="SWiiFT"
            company="SWiiFT"
            title="Full-Stack Engineering Intern"
            date="Jun 2023 - Aug 2023"
            bullets={[
              "Frontend and backend component development for user authentication",
              "Google Firebase services and building API endpoints.",
              "Developed a database architecture to optimize data storage and management",
            ]}
          />
          <ExperienceCard
            src="/images/innovativedesign.png"
            alt="Innovative Design"
            company="Innovative Design"
            title="VP of Technology"
            date="Jan 2023 - May 2024"
            bullets={[
              "Developed the club’s main and events website using React.js.",
              "Promoted website redesigns for local vendors using Figma.",
              "Led team projects of developing websites for other student orgs and local start-up clients.",
            ]}
          />
          <ExperienceCard
            src="/images/wear.png"
            alt="Web3 Analyst Intern"
            company="Studio WE-AR"
            title="Web3 Analyst Intern"
            date="Mar 2022 - Jul 2022"
            bullets={[
              "Performed market research on the NFT marketfor the company’s own Web3 NFT project launch.",
              "Worked on company's pitch deck that acquired series A funding of $3M.",
            ]}
          />
          <ExperienceCard
            src="/images/army.png"
            alt="Republic of Korea Army"
            company="Republic of Korea Army"
            title="Social Service Agent"
            date="Jun 2020 - Mar 2022"
            bullets={[
              "Served as a Squad Leader during Army boot camp, overseeing the accountability of a team of over a dozen soldiers.",
              "Spearheaded community programs to foster social interaction and assist over 600 vulnerable individuals during COVID-19.",
            ]}
          />
          <ExperienceCard
            src="/images/keysupreme.png"
            alt="KeySupreme"
            company="KeySupreme"
            title="Engineering Design Intern"
            date="Jun 2019 - Aug 2019"
            bullets={[
              "Created prototypes for sample product design models through 3D modeling and printing.",
              "Designed and 3D printed prototypes for testing purposes using SolidWorks.",
            ]}
          />
        </div>
      </section>
      <hr />

      {/* Projects */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center lg:text-left">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
          <ExperienceCard
            src="/images/e2ee.svg"
            alt="Project 1"
            company="E2EE File Sharing System"
            title=""
            date="March 2023"
            bullets={[
              "Designed an end-to-end encrypted file sharing system from scratch, supported by extensive design documents.",
              "Built a client application that allows users to authenticate, save, load, modify, and share files with controlled access.",
            ]}
          />
          <ExperienceCard
            src="/images/pacman.svg"
            alt="AI Pacman"
            company="AI Pacman"
            title=""
            date="March 2024"
            bullets={[
              "Implemented DFS, BFS, UCS, and A* search algorithms to solve navigation problems in a Pacman environment.",
              "Designed agents using minimax, alpha-beta pruning, and expectimax algorithms for probabilistic environments involving Pacman and ghosts.",
            ]}
          />
          <ExperienceCard
            src="/images/gitlet.svg"
            alt="Project 2"
            company="Gitlet"
            title=""
            date="May 2022"
            bullets={[
              "Developed a version control system that mimics basic features of Git and implemented 15+ Git functions.",
              "Wrote design documents and extensive amount of unit, integration, and acceptance tests.",
            ]}
          />
        </div>
      </section>
      <hr />

      {/* Fun Fact Section */}
      <section className="useless-fact my-16 text-center">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {fact && (
          <div className="text-lg">
            <p>
              <strong>
                Thank you for visiting! Here&apos;s a fun fact for today :)
              </strong>
            </p>
            <p className="mt-4 text-base">{fact}</p>
          </div>
        )}
      </section>
    </div>
  );
}
