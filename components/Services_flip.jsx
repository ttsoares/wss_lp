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
          <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0 flex flex-col items-center justify-start space-y-10 bg-[#1B1B1B] rounded-xl">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="p-5 mt-5 text-4xl text-[#A48661]"
                />
                <h2 className="text-[#A48661] text-center px-5">
                  ESTRATÉGIA DE GOVERNANÇA
                </h2>
              </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-[#383532] px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <p className="text-[#A48661] p-2 text-center">
                    Promovemos a operação, auxílio e direcionamento da
                    governança, estratégia e práticas de segurança dentro da sua
                    empresa através da formação de uma equipe terceirizada ou
                    híbrida para nortear as discussões, o planejamento e as
                    operações da Segurança da Informação.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0 flex flex-col items-center justify-start space-y-10 bg-[#1B1B1B] rounded-xl">
                <FontAwesomeIcon
                  icon={faLock}
                  className="p-5 mt-5 text-4xl text-[#A48661]"
                />
                <h2 className="text-[#A48661] text-center px-5">
                  AVALIAÇÕES E TESTES DE SEGURANÇA
                </h2>
              </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-[#383532] px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <p className="text-[#A48661] p-2 text-center">
                    Estratégia e Governança Avaliamos o estado de segurança de
                    ativos da sua empresa através dos diferentes tipos de teste
                    de segurança, atuando como instrumento de medida e tomada de
                    decisão baseado nas descobertas relacionadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0 flex flex-col items-center justify-start space-y-10 bg-[#1B1B1B] rounded-xl">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="p-5 mt-5 text-4xl text-[#A48661]"
                />
                <h2 className="text-[#A48661] text-center px-5">
                  TREIAMENTO, EDUCAÇÃO E CONSCIENTIZAÇÃO
                </h2>
              </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-[#383532] px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <p className="text-[#A48661] p-2 text-center">
                    Realizamos treinamentos sob demanda com intuito de capacitar
                    as pessoas colaboradoras em temas tão essenciais nos dias de
                    hoje. Mais do que isso, instituimos programas de
                    conscientização e educação em segurança da informação para o
                    contribuir com a cultura de segurança e proteção de dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group h-96 w-80 [perspective:1000px]">
        <div class="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0 flex flex-col items-center justify-start space-y-10 bg-[#1B1B1B] rounded-xl">
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className="p-5 mt-5 text-4xl text-[#A48661]"
            />
            <h2 className="text-[#A48661] text-center px-5">
              ANÁLISE DE VULNERABILIDADES
            </h2>
          </div>
          <div class="absolute inset-0 h-full w-full rounded-xl bg-[#383532] px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <p className="text-[#A48661] p-2 text-center">
                Avaliamos o estado de segurança de ativos da sua empresa através
                dos diferentes tipos de teste de segurança, atuando como
                instrumento de medida e tomada de decisão baseado nas
                descobertas relacionadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
