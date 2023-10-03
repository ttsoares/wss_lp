import About from "@/components/About";
import Formation from "@/components/Formation";
import Hero from "@/components/Hero";
import Podcast from "@/components/Podcast";
import Services from "@/components/Services";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Hero />
      <Services />
      <Formation />
      <Podcast />
      <About />
    </main>
  );
}
