import React from "react";
import "./index.css";

function About() {
  return (
    <section className="sobre" id="about">
      <h2 id="about">Sobre</h2>
      <p className="about-text">
        Sou aluno do quinto semestre do curso de Análise e Desenvolvimento de
        Sistemas da Facens. Tenho paixão por tecnologia e estou focado em me
        aprimorar como desenvolvedor Front-End. Considero essa motivação um
        grande diferencial em uma equipe de TI. Estou constantemente em busca de
        novos conhecimentos, acompanhando as últimas tendências e frameworks
        populares. Valorizo a colaboração da equipe e estou determinado a
        contribuir significativamente para o sucesso da empresa.
      </p>

      <div className="icons">
        <a href="https://github.com/danilobarros3" target="_blank">
          <ion-icon name="logo-github"> </ion-icon>
        </a>

        <a href="https://www.linkedin.com/in/danilobarros3/" target="_blank">
          <ion-icon name="logo-linkedin"> </ion-icon>
        </a>

        <a
          href="mailto:danilo.barros3@outlook.com"
          class="link-email"
          target="_blank"
        >
          <ion-icon name="mail-unread-outline"></ion-icon>
        </a>

        <a
          href="https://wa.me/5515997944546/"
          class="link-whats"
          target="_blank"
        >
          <ion-icon name="call-outline"></ion-icon>
        </a>
      </div>
    </section>
  );
}

export default About;
