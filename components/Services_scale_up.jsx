import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faLock,
  faBriefcase,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center w-full space-y-5 border-2 border-red-500 h-fit"
    >
      <h1 className="py-10 mx-auto text-3xl text-center text-[#A48661]">
        SERVIÇOS
      </h1>
      <div className="flex w-full">
        <div className="flex justify-center w-full space-x-5">
          <div className="relative w-1/5 h-80 group ">
            {/* Front */}
            <div className="absolute inset-0 w-full h-full bg-[#1B1B1B] peer flex flex-col items-center justify-start space-y-10 group-hover:scale-110 transition-transform  duration-300 ease-out">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="p-5 mt-5 text-4xl text-[#A48661]"
              />
              <h2 className="text-[#A48661] text-center">
                ESTRATÉGIA E GOVERNANÇA
              </h2>
            </div>
            {/* Back */}
            <div className="absolute inset-0 hidden w-full h-full bg-[#383532] hover:block hover:z-10 peer-hover:block peer-hover:z-10 transition trasnform hover:-translate-y-1 hover:scale-110 duration-300 translate-y-0 scale-100">
              <p className="text-[#A48661] p-5 text-center">
                Promovemos a operação, auxílio e direcionamento da governança,
                estratégia e práticas de segurança dentro da sua empresa através
                da formação de uma equipe terceirizada ou híbrida para nortear
                as discussões, o planejamento e as operações da Segurança da
                Informação.
              </p>
            </div>
          </div>

          <div className="relative w-1/5 h-80 group">
            <div className="absolute inset-0 w-full h-full bg-[#1B1B1B] peer flex flex-col items-center justify-start space-y-10 group-hover:scale-110 transition-transform  duration-300 ease-out">
              <FontAwesomeIcon
                icon={faLock}
                className="p-5 mt-5 text-4xl text-[#A48661]"
              />
              <h2 className="text-[#A48661] text-center">
                AVALIAÇÕES E TESTES DE SEGURANÇA
              </h2>
            </div>
            <div className="absolute inset-0 hidden w-full h-full bg-[#383532] hover:block hover:z-10 peer-hover:block peer-hover:z-10 transition trasnform hover:-translate-y-1 hover:scale-110 duration-300 translate-y-0 scale-100">
              <p className="text-[#A48661] p-5 text-center">
                Avaliamos o estado de segurança de ativos da sua empresa através
                dos diferentes tipos de teste de segurança, atuando como
                instrumento de medida e tomada de decisão baseado nas
                descobertas relacionadas.
              </p>
            </div>
          </div>

          <div className="relative w-1/5 h-80 group">
            <div className="absolute inset-0 w-full h-full bg-[#1B1B1B] peer flex flex-col items-center justify-start space-y-10 group-hover:scale-110 transition-transform  duration-300 ease-out">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="p-5 mt-5 text-4xl text-[#A48661]"
              />
              <h2 className="text-[#A48661] text-center">
                TREINAMENTO, EDUCAÇÃO E CONSCIENTIZAÇÃO
              </h2>
            </div>
            <div className="absolute inset-0 hidden w-full h-full bg-[#383532] hover:block hover:z-10 peer-hover:block peer-hover:z-10 transition trasnform hover:-translate-y-1 hover:scale-110 duration-300 translate-y-0 scale-100">
              <p className="text-[#A48661] p-5 text-center">
                Realizamos treinamentos sob demanda com intuito de capacitar as
                pessoas colaboradoras em temas tão essenciais nos dias de hoje.
                Mais do que isso, instituimos programas de conscientização e
                educação em segurança da informação para o contribuir com a
                cultura de segurança e proteção de dados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-1/5 h-80 group">
        <div className="absolute inset-0 w-full h-full bg-[#1B1B1B] peer flex flex-col items-center justify-start space-y-10 group-hover:scale-110 transition-transform  duration-300 ease-out">
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className="p-5 mt-5 text-4xl text-[#A48661]"
          />
          <h2 className="text-[#A48661] text-center">
            ANÁLISE DE VULNERABILIDADES
          </h2>
        </div>
        <div className="absolute inset-0 hidden w-full h-full bg-[#383532] hover:block hover:z-10 peer-hover:block peer-hover:z-10 transition trasnform hover:-translate-y-1 hover:scale-110 duration-300 translate-y-0 scale-100">
          <p className="text-[#A48661] p-5 text-center">
            Realizamos um diagnóstico/análise de gaps dos controles de segurança
            através do mapeamento e levantamento de recursos, informações e
            fluxos existentes na sua empresa, indicando caminhos e priorizações
            de esforços a serem tomados.
          </p>
        </div>
      </div>
      <div className="flex justify-end w-full h-28">
        <Image
          src="/images/marcadagua.png"
          alt="backgound"
          width={180}
          height={80}
        />
      </div>
    </div>
  );
};

export default Services;
