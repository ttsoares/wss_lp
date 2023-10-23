import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full mt-20 h-screen">
      <h2 className="mt-10 mb-12 text-center text-3xl w-full md:w-1/5 mx-auto text-[#A48661]">
        SOBRE NÓS
      </h2>

      <div className="w-[90%] flex flex-col md:flex-row justify-around items-center rounded-2xl p-5 mx-auto bg-[#1b1b1b] mb-10">
        <div className="w-full mx-auto md:w-2/3 md:ml-24">
          <p className="text-lg md:text-xl text-[#A48661] mb-6">
            A segurança digital do seu mundo
          </p>
          <p className="tracking-widest text-left text-white">
            A WSS é mais do que uma empresa. A WSS é uma voz uníssona da
            Segurança da Informação. No final de 2011, decidi que essa
            &quot;única voz&quot; deveria ser formada por um conjunto de pessoas
            que compartilhassem uma forma de pensar. Desde então, vejo que a
            forma de pensar foi e é o grande diferencial da WSS. Ao longo desses
            anos dezenas de pessoas deram voz à WSS, seja na pesquisa, no
            ensino, no aprendizado, no oferecimento de serviços, na inovação, ou
            em tudo isso conjuntamente. Tantas pessoas, tantas ideias, tantos
            anseios... é por isso que trabalhamos para a segurança digital do
            SEU mundo.
          </p>
        </div>
        <div className="flex flex-col items-center justify-centerw-full md:w-1/3">
          <Image
            src="/images/dalalana.jpg"
            alt="Dalalana"
            width={300}
            height={250}
            className="p-5 transition duration-300 rounded-full trasnform hover:scale-110 "
          />
          <p className="text-[#A48661] mb-5">Daniel Dalalana Bertoglio</p>
          <p className="text-[#A48661]">CEO WSS Security</p>
        </div>
      </div>
    </section>
  );
};

export default About;
