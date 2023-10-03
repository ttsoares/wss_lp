"use client";

// Precisa @headlessui/react

import React from "react";

import Slider from "@/components/Slider";

const testimonials = [
  {
    img: "/images/ben-hur.jpg",
    quote:
      "Fazer parte do percurso foi uma das melhores decisões que tive em minha vida profissional. A forma como a WSS cria a comunidade e nos faz ter contato com pessoas em busca de um mesmo objetivo é algo singular. Estar junto com estas pessoas, aprendendo, descobrindo e colaborando em cyber sem dúvida criou muitas oportunidades em minha carreira.",
    name: "Ben-Hur Ott",
    role: "Segurança em aplicações",
  },
  {
    img: "/images/pedro.jpg",
    quote:
      "O Percurso é uma experiência de aprendizagem única, o seu método oportuniza aos alunos uma abordagem basilar, expondo-os aos elementos constituintes da segurança da informação. O primor didático do Dalalana, assim como seu viés cientifico e preocupações éticas com a área, contribuem para uma formação que vai muito além apenas do conteúdo ‘técnico’ de segurança da informação.",
    name: "Pedro Kassick",
    role: "Consultor pleno",
  },
  {
    img: "/images/thiago.jpg",
    quote:
      "O Percurso não só me ajudou a melhorar técnicamente na área de segurança como também me ensinou a lidar com os processos envolvidos no assunto. Quando a pergunta é segurança digital a resposta nunca será simples e a WSS faz o possível para auxiliar cada aluno nessa jornada, criando um ambiente amigável e inclusivo onde todos possam compartilhar suas ideias.",
    name: "Thiago Graeff",
    role: "Consulor júnior",
  },
];

const Testimony = () => {
  return (
    <div className="w-full h-fit">
      <Slider testimonials={testimonials} />
    </div>
  );
};

export default Testimony;
