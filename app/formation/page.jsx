"use client";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Testimony from "@/components/Testimony";

import {
  faBookOpen,
  faUserShield,
  faChartLine,
  faPlus,
  faFolderTree,
  faCloudArrowUp,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

import { faClone, faBookmark } from "@fortawesome/free-regular-svg-icons";

const Formation = () => {
  function form() {
    window.open("https://forms.gle/mi1LWtKuEiTbjZ7AA");
  }

  return (
    <section className="w-full h-fit mt-10 bg-gradient-to-b from-black to-[#423A33]">
      <h1 className="py-10 mx-auto text-3xl text-center text-[#A48661]">
        FORMAÇÕES
      </h1>
      <div className=" flex flex-col w-[90%] rounded-2xl h-full bg-[#1b1b1b] mx-auto mb-14">
        <div className="p-5 space-y-8">
          <p className="font-bold text-lg text-[#A48660]">
            Percurso em Segurança Ofensiva e Operações em Cibersegurança
          </p>
          <p className="tracking-wider text-white text-justify md:text-left">
            Com o objetivo de possibilitar, por meio de um espaço singular de
            experimentações e conhecimento, o desenvolvimento de capacidades no
            contexto de Segurança da Informação - mais especificamente nas áreas
            de Segurança Ofensiva e Operações de Cibersegurança, o Percurso é
            uma formação de 300 horas que ocorre no modelo on-line síncrono (ao
            vivo) dividida em 5 eixos de conhecimento, além do teste final e das
            supervisões que devem ser realizadas como requisitos para a
            conclusão da formação.{" "}
          </p>
          <h2 className="font-bold text-center md:text-left text-lg text-[#A48660]">
            Eixos
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-around mx-auto w-full md:w-[80%]">
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
            <h3 className="pb-6 text-6xl text-[#A48661] transition trasnform hover:text-[#cba87a] hover:scale-110 duration-300 ">
              90%
            </h3>
            <p className="text-white">
              Dos alunos concluintes do Percurso atuam na área de segurança
            </p>
          </div>

          <div className="text-center ">
            <h3 className="pb-6 text-6xl text-[#A48661] transition trasnform hover:text-[#cba87a] hover:scale-110 duration-300">
              60%
            </h3>
            <p className="text-white">
              Dos alunos atuaram ou atuam na WSS Security
            </p>
          </div>
        </div>
        <div className="mt-14 mb-16 border-b-2 border-[#4c3f2e] w-[95%] mx-auto h-1"></div>
        <h2 className="text-[#A48661] text-center md:text-start text-lg md:ml-20 mb-10">
          Depoimentos
        </h2>
        <div className="w-full ">
          <Testimony />
        </div>
        <div className="w-full">
          <div
            onClick={form}
            className="flex mt-16 mx-auto w-fit rounded-2xl justify-center p-3 text-black text-sm items-center bg-[#A48661] transition trasnform  hover:scale-125 duration-300 hover:cursor-pointer border-2"
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="w-4 h-3 text-lg text-black rounded-full ring-4 ring-black"
            />
            <span className="ml-3 font-semibold">
              INSCREVA-SE PARA PERCURSO WSS
            </span>
          </div>
        </div>
        {/* divider */}
        <div className="mt-14 mb-14 border-b-2 border-[#4c3f2e] w-[95%] mx-auto h-1"></div>
        <div className="w-[80%] md:w-[70%] mx-auto">
          <h2 className="text-[#A48661] text-center md:text-left md:text-xl mb-5 font-semibold">
            Eixos Adicionais de Formação
          </h2>
          <p className="text-lg text-white text-justify md:text-left">
            Todas as pessoas que concluem o Percurso estão aptas a fazer
            formações de curta duração chamadas Eixos Adicionais de Formação,
            que são representados por temáticas específicas relacionadas à área
            de Segurança Ofensiva e/ou Operações de Cibersegurança.{" "}
          </p>
        </div>
        <div className="flex mt-16 mb-10 w-[80%] mx-auto justify-between items-center text-sm">
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
    </section>
  );
};

export default Formation;
