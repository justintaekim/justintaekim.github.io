import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Justin's Portfolio
      </h1>
      <p className="mb-4">
        {`Hello! I'm Justin, a recent Computer Science graduate from UC Berkeley with a passion for developing innovative solutions through full-stack development and AI.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
