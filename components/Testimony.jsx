"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carocel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Deps = [
  {
    img: "/images/ben-hur.jpg",
    name: "Ben-Hut Ott",
    role: "Application Security Leader no Mercado Livre - LATAM",
    title: "Aluno do Percurso I",
    text: "Fazer parte do percurso foi uma das melhores decisões que tive em minha vida profissional. A forma como a WSS cria a comunidade e nos faz ter contato com pessoas em busca de um mesmo objetivo é algo singular. Estar junto com estas pessoas, aprendendo, descobrindo e colaborando em cyber sem dúvida criou muitas oportunidades em minha carreira.",
  },
  {
    img: "/images/pedro.jpg",
    name: "Pedro Kassick Soares",
    role: "Consultor Pleno de Segurança da Informação na WSS Security",
    title: "Aluno do Percurso I",
    text: "O Percurso é uma experiência de aprendizagem única, o seu método oportuniza aos alunos uma abordagem basilar, expondo-os aos elementos constituintes da segurança da informação. O primor didático do Dalalana, assim como seu viés cientifico e preocupações éticas com a área, contribuem para uma formação que vai muito além apenas do conteúdo &quot;técnico&quot; de segurança da informação.",
  },
  {
    img: "/images/thiago.jpg",
    name: "Thiago Graeff",
    role: "Consultor Jínior de Segurança da Informação na WSS Security",
    title: "Aluno do Percurso III",
    text: "O Percurso não só me ajudou a melhorar técnicamente na área de segurança como também me ensinou a lidar com os processos envolvidos no assunto. Quando a pergunta é segurança digital a resposta nunca será simples e a WSS faz o possível para auxiliar cada aluno nessa jornada, criando um ambiente amigável e inclusivo onde todos possam compartilhar suas ideias.",
  },
];

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + "-" + "</span>";
  },
};

//----------------------
const Testimony = () => {
  return (
    <div className="w-full md:px-20 md:ml-20 h-fit">
      <Swiper
        pagination={pagination}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        rewind={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Deps.map((depo, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center w-full ">
              <div className="w-full md:w-1/3 px-10 py-5 mt-8 text-center text-[#A48661]">
                <Image
                  className="object-fill w-40 h-40 mx-auto rounded-full"
                  src={depo.img}
                  alt="image slide 1"
                  width={200}
                  height={200}
                />
                <p className="my-2 font-bold">{depo.name}</p>
                <p className="text-sm">{depo.role}</p>
              </div>

              <div className="w-full md:w-2/3 flex flex-col items-center">
                <h2 className="text-[#A48661] text-xl mb-6">{depo.title}</h2>
                <p className="w-[80%] text-justify md:text-left text-lg text-white mb-10">
                  {depo.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimony;
