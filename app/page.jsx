import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-fit md:min-h-screen">
      <section>
        <div id="home" className="w-full h-[600px] md:h-screen ">
          <div className="w-full h-full relative">
            <Image src="/images/firenze.webp" alt="Firenze" fill />
          </div>
          <div className="absolute inset-0 w-full h-96 md:h-screen bg-gradient-to-b from-white to-black mix-blend-multiply"></div>

          <div className="absolute py-8 pl-4 pr-48 space-y-4 text-4xl font-light tracking-widest text-white top-20 md:top-72 backdrop-brightness-50 left-0 md:left-28">
            <h1 className="font-light">A</h1>
            <h1 className="font-normal">SEGURANÇA DIGITAL</h1>
            <h1 className="font-bold">DO</h1>
            <h1 className="font-black animate-pulse">SEU MUNDO</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
