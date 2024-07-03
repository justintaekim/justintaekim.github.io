import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="intro text-center">
        <h2 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h2>
        <p className="mt-4 text-lg">
          Ipsum lorem dolor aliquam ante commodo magna sed accumsan arcu neque.
        </p>
        <p className="mt-4 text-lg">
          Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi
          lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis
          tortor primis integer massa adipiscing id nisi accumsan pellentesque
          commodo blandit enim arcu non at amet id arcu magna. Accumsan orci
          faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque
          cubilia.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full">
          Learn More
        </button>
      </section>

      <section className="recent-work mt-16">
        <h2 className="text-4xl font-bold text-center lg:text-left">
          Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="work-item">
            <Image
              src="/images/work1.jpg"
              alt="Work 1"
              width={400}
              height={300}
              className="rounded"
            />
          </div>
          <div className="work-item">
            <Image
              src="/images/work2.jpg"
              alt="Work 2"
              width={400}
              height={300}
              className="rounded"
            />
          </div>
          <div className="work-item">
            <Image
              src="/images/work3.jpg"
              alt="Work 3"
              width={400}
              height={300}
              className="rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
