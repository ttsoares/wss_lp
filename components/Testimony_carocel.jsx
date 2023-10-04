"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carocel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + "-" + "</span>";
  },
};

//----------------------
const Testimony = () => {
  return (
    <div className="w-full px-20 ml-20 h-fit">
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
        <SwiperSlide>
          <div className="flex items-center justify-center w-full ">
            <div className="w-1/3 px-10 py-5 mt-8 text-center text-[#A48661]">
              <Image
                className="object-fill w-40 h-40 mx-auto rounded-full"
                src="/images/ben-hur.jpg"
                alt="image slide 1"
                width={200}
                height={200}
              />
              <p className="my-2 font-bold">Ben-Hut Ott</p>
              <p className="text-sm">
                Application Security Leader no Mercado Livre - LATAM
              </p>
            </div>

            <div className="w-2/3">
              <h2 className="text-[#A48661] text-xl mb-6">
                Aluno do Percurso I
              </h2>
              <p className="w-2/3 text-lg text-white">
                Fazer parte do percurso foi uma das melhores decisões que tive
                em minha vida profissional. A forma como a WSS cria a comunidade
                e nos faz ter contato com pessoas em busca de um mesmo objetivo
                é algo singular. Estar junto com estas pessoas, aprendendo,
                descobrindo e colaborando em cyber sem dúvida criou muitas
                oportunidades em minha carreira.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center w-full ">
            <div className="w-1/3 px-10 py-5 mt-8 text-[#A48661] text-center">
              <Image
                className="object-fill w-40 h-40 mx-auto rounded-full"
                src="/images/pedro.jpg"
                alt="image slide 1"
                width={200}
                height={200}
              />
              <p className="my-2 font-bold">Pedro Kassick Soares</p>
              <p className="text-sm">
                Consultor Pleno de Segurança da Informação na WSS Security
              </p>
            </div>

            <div className="w-2/3">
              <h2 className="text-[#A48661] text-xl mb-6">
                Aluno do Percurso I
              </h2>
              <p className="w-2/3 text-lg text-white">
                O Percurso é uma experiência de aprendizagem única, o seu método
                oportuniza aos alunos uma abordagem basilar, expondo-os aos
                elementos constituintes da segurança da informação. O primor
                didático do Dalalana, assim como seu viés cientifico e
                preocupações éticas com a área, contribuem para uma formação que
                vai muito além apenas do conteúdo &quot;técnico&quot; de
                segurança da informação.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center w-full ">
            <div className="w-1/3 px-10 py-5 mt-8 text-[#A48661] text-center">
              <Image
                className="object-fill w-40 h-40 mx-auto rounded-full"
                src="/images/thiago.jpg"
                alt="image slide 1"
                width={200}
                height={200}
              />
              <p className="my-2 font-bold">Thiago Graeff</p>
              <p className="text-sm">
                Consultor Jínior de Segurança da Informação na WSS Security
              </p>
            </div>

            <div className="w-2/3">
              <h2 className="text-[#A48661] text-xl mb-6">
                Aluno do Percurso III
              </h2>
              <p className="w-2/3 text-lg text-white">
                O Percurso não só me ajudou a melhorar técnicamente na área de
                segurança como também me ensinou a lidar com os processos
                envolvidos no assunto. Quando a pergunta é segurança digital a
                resposta nunca será simples e a WSS faz o possível para auxiliar
                cada aluno nessa jornada, criando um ambiente amigável e
                inclusivo onde todos possam compartilhar suas ideias.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimony;
