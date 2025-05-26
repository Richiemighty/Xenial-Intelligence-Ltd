import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <section className="max-w-5xl mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-6">What We Do</h2>
        <p className="text-lg mb-6">
          At Xenial Intelligence Ltd, we develop AI-powered software solutions to revolutionize
          your business operations. Our services span from custom AI applications,
          cloud computing, cybersecurity to IT infrastructure management.
        </p>
      </section>
    </section>
  );
}
