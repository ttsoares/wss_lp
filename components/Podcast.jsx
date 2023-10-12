import React from "react";
import Image from "next/image";

import Divider from "@/components/Divider";

//----------------------
const Podcast = () => {
  return (
    <section className="w-full mt-28 md:mt-0 h-fit">
      <h2 className="mb-12 text-center text-3xl w-full md:w-1/5 mx-auto text-[#A48661]">
        PODCAST
      </h2>
      <div className="w-[90%] rounded-2xl pb-14 mx-auto bg-[#1b1b1b]">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <div className="object-center transition trasnform  hover:scale-125 duration-300 md:mr-20">
            <Image
              src="/images/podcast.png"
              alt="podcast"
              width={200}
              height={200}
              className="p-5 md:mr-8"
            />
          </div>
          <div className="w-[90%] mx-auto md:mx-0 md:w-[45%] space-y-6 text-left md:m-14">
            <p className="text-xl mb-8 text-[#A48661] text-center md:text-left">
              Café Seguro
            </p>
            <p className="tracking-wider text-white">
              O Café Seguro Podcast é um dos produtos da WSS Security, empresa
              que preza pela abordagem científica, ética e responsável da
              Segurança da Informação. Desde seu princípio, “o podcast prioriza
              disseminar conteúdos para ser um agente ativo na comunidade de
              segurança através de conversas com pessoas interessadas pelo tema.
            </p>
            <p className="tracking-wider text-white">
              Em seu formato o podcast destina-se a dar voz à percepções e
              opiniões dos integrantes, dos convidados e do público espectador
              ao encorajar que as pessoas envolvidas sejam participantes ativos
              dessa construção uníssona da mensagem passada a cada episódio.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-5">
          <a
            href="https://forms.gle/mi1LWtKuEiTbjZ7AA"
            target="_blank"
            className="flex mt-16 rounded-2xl justify-center w-fit px-4 py-1 text-black text-sm items-center bg-[#A48661] transition trasnform  hover:scale-125 duration-300 border-2"
          >
            <Image
              src="/images/youtube.svg"
              alt="watch at Youtube"
              width={25}
              height={25}
              className="mr-3"
            />

            <span className="md:ml-3 font-semibold">ASSISTIR NO YOUTUBE</span>
          </a>
          <a
            href="https://forms.gle/mi1LWtKuEiTbjZ7AA"
            target="_blank"
            className="flex mt-16 rounded-2xl justify-center w-fit px-4 py-1 text-black text-sm items-center bg-[#A48661] transition trasnform  hover:scale-125 duration-300 border-2"
          >
            <Image
              src="/images/spotify.svg"
              alt="Listen at Spotify"
              width={25}
              height={25}
              className="mr-3"
            />
            <span className="md:ml-3 font-semibold">OUVIR NO SPOTIFY</span>
          </a>
        </div>
      </div>
      <div id="aboutus" className="w-full md:h-10 md:p-10 ">
        <Divider />
      </div>
    </section>
  );
};

export default Podcast;
