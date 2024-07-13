"use client";

import Image from "next/image";
import useFetchFact from "./hooks/useFetchFact";

export default function Home() {
  const { fact, error, loading } = useFetchFact();

  return (
    <div className="p-8">
      {/* About Me */}
      <section className="">
        <h2 className="text-4xl font-bold">About me!</h2>
        <p className="my-4 text-lg">
          Hello, welcome! My name is Justin and i&apos;m a recent UC Berkeley
          graduate with a degree in Computer Science. I am passionate about
          developing innovative solutions and projects that provides convenience
          and improves people&apos;s daily lives.
        </p>
        <p className="my-4 text-lg">
          In my free time, I enjoy hanging out with friends, traveling places I
          haven&apos;t been to, watch poker tournament videos, and going to the
          gym. I am also a huge Chipotle fan. Ask me how much Chipotle rewards
          points I have!
        </p>
      </section>
      <hr />

      {/* Education */}
      <section className="my-10">
        <h2 className="text-4xl font-bold">Education</h2>
        <div className="my-4 flex items-center">
          <Image
            src="/images/berkeley.png"
            alt="School Seal"
            width={100}
            height={100}
            className="mr-6"
          />
          <div className="mr-4">
            <h3 className="text-2xl font-semibold">
              University of California, Berkeley
            </h3>
            <p className="text-lg italic">B.A. in Computer Science</p>
            <p className="text-lg">August 2018 - May 2024</p>
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
          <h4 className="text-xl font-medium mt-2">Activities:</h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              Visual Media Comittee Member - Phi Beta Lambda (Spring 2020)
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center lg:text-left">
          Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="work-item">
            <Image
              src="/images/placeholder.png"
              alt="Work 1"
              width={400}
              height={300}
              className="rounded"
            />
          </div>
          <div className="work-item">
            <Image
              src="/images/placeholder.png"
              alt="Work 2"
              width={400}
              height={300}
              className="rounded"
            />
          </div>
          <div className="work-item">
            <Image
              src="/images/placeholder.png"
              alt="Work 3"
              width={400}
              height={300}
              className="rounded"
            />
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="useless-fact mt-16 text-center">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {fact && (
          <p className="mt-4 text-lg">
            <strong>Fun Fact of the day!: </strong>
            {fact}
          </p>
        )}
      </section>
    </div>
  );
}
