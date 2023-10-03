import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Testimony from "@/components/Testimony";

// import the icons you need
import {
  faBookOpen,
  faUserShield,
  faArrowTrendUp,
  faChartLine,
  faPlus,
  faFolderTree,
  faCloudArrowUp,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

import { faClone, faBookmark } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

const Formation = () => {
  return (
    <section id="formations" className="w-full mt-20 h-fit">
      <h1 className="py-10 mx-auto text-3xl text-center text-[#A48661]">
        FORMAÇÕES
      </h1>
      <div className=" flex flex-col w-[95%] rounded-2xl h-full bg-[#1b1b1b] mx-auto">
        <div className="p-10 space-y-8">
          <p className="font-bold text-lg text-[#A48660]">
            Percurso em Segurança Ofensiva e Operações em Cibersegurança
          </p>
          <p className="tracking-wider text-white">
            Com o objetivo de possibilitar, por meio de um espaço singular de
            experimentações e conhecimento, o desenvolvimento de capacidades no
            contexto de Segurança da Informação - mais especificamente nas áreas
            de Segurança Ofensiva e Operações de Cibersegurança, o Percurso é
            uma formação de 300 horas que ocorre no modelo on-line síncrono (ao
            vivo) dividida em 5 eixos de conhecimento, além do teste final e das
            supervisões que devem ser realizadas como requisitos para a
            conclusão da formação.{" "}
          </p>
          <p className="font-bold text-lg text-[#A48660]">Eixos</p>
        </div>
        <div className="flex justify-around mx-auto w-[80%]">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="p-5 text-4xl text-[#A48661] transition trasnform hover:-translate-y-1 hover:scale-150 duration-300 translate-y-0 scale-100 "
            />
            <p className="text-white">Fundamentos</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faClone}
              className="p-5 text-4xl text-[#A48661] transition trasnform hover:-translate-y-1 hover:scale-150 duration-300 translate-y-0 scale-100 "
            />
            <p className="text-white">Técnicas e Princípios</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faChartLine}
              className="p-5 text-4xl text-[#A48661] transition trasnform hover:-translate-y-1 hover:scale-150 duration-300 translate-y-0 scale-100 "
            />
            <p className="text-white">Análises e Métodos</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faUserShield}
              className="p-5 text-4xl text-[#A48661] transition trasnform hover:-translate-y-1 hover:scale-150 duration-300 translate-y-0 scale-100 "
            />
            <p className="text-white">Vetores e Incidentes</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faBookmark}
              className="p-5 text-4xl text-[#A48661] transition trasnform hover:-translate-y-1 hover:scale-150 duration-300 translate-y-0 scale-100 "
            />
            <p className="text-white">Tópicos Especiais e Atuação</p>
          </div>
        </div>
        {/* divider */}
        <div className="mt-14 mb-32 border-b-2 border-[#4c3f2e] w-[95%] mx-auto h-1"></div>
        <div className="flex justify-between mx-auto w-[90%]">
          <div className="text-center ">
            <p className="pb-6 text-6xl text-[#A48661] transition trasnform hover:text-[#cba87a] hover:scale-110 duration-300 ">
              90%
            </p>
            <p className="text-white">
              Dos alunos concluintes do Percurso atuam na área de segurança
            </p>
          </div>

          <div className="text-center ">
            <p className="pb-6 text-6xl text-[#A48661] transition trasnform hover:text-[#cba87a] hover:scale-110 duration-300">
              60%
            </p>
            <p className="text-white">
              Dos alunos atuaram ou atuam na WSS Security
            </p>
          </div>
        </div>
        <div className="mt-14 mb-16 border-b-2 border-[#4c3f2e] w-[95%] mx-auto h-1"></div>
        <h2 className="text-[#A48661] text-start text-lg ml-20 mb-10">
          Depoimentos
        </h2>
        <div className="w-full ">
          <Testimony />
        </div>
        <div className="w-full">
          <a
            href="https://forms.gle/mi1LWtKuEiTbjZ7AA"
            target="_blank"
            className="flex mt-16 mx-auto w-1/4 rounded-2xl justify-center p-1 text-black text-sm items-center bg-[#A48661] transition trasnform  hover:scale-125 duration-300"
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="w-4 h-3 text-lg text-black rounded-full ring-4 ring-black"
            />
            <span className="ml-3 font-semibold">
              INSCREVA-SE PARA PERCURSO WSS
            </span>
          </a>
        </div>
        {/* divider */}
        <div className="mt-14 mb-14 border-b-2 border-[#4c3f2e] w-[95%] mx-auto h-1"></div>
        <div className="w-[70%] mx-auto">
          <h2 className="text-[#A48661] text-xl mb-5 font-semibold">
            Eixos Adicionais de Formação
          </h2>
          <p className="text-lg text-white">
            Todas as pessoas que concluem o Percurso estão aptas a fazer
            formações de curta duração chamadas Eixos Adicionais de Formação,
            que são representados por temáticas específicas relacionadas à área
            de Segurança Ofensiva e/ou Operações de Cibersegurança.{" "}
          </p>
        </div>
        <div className="flex mt-16 mb-10 w-[60%] mx-auto justify-between items-center">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faFolderTree}
              className="text-4xl text-[#a48661] mb-4 transition trasnform  hover:scale-150 duration-300"
            />
            <p className="text-white">Testes de Segurança em APIs</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faCloudArrowUp}
              className="text-4xl text-[#a48661] mb-4 transition trasnform  hover:scale-150 duration-300"
            />
            <p className="text-white">Segurança em Nuvem</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faFlask}
              className="text-4xl text-[#a48661] mb-4 transition trasnform  hover:scale-150 duration-300"
            />
            <p className="text-white">Análise de Exploits</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full mt-24 h-28">
        <Image
          src="/images/marcadagua.png"
          alt="backgound"
          width={180}
          height={80}
        />
      </div>
    </section>
  );
};

export default Formation;
