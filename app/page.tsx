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
        <p className="mt-4 text-lg">
          I am a recent UC Berkeley graduate seeking challenging opportunities
          in the Software Engineering. I am passionate about developing
          innovative solutions and projects that improves people&apos;s daily
          lives.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full">
          Learn More
        </button>
      </section>

      {/* Projects */}
      <section className="mt-16">
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
