import React from 'react';
import '../../App.css';


import {motion } from 'framer-motion';

export default function Services() {
  return <section className='services'> 
      <section className="container">
        <div className="wrapper">
          <section className="img-bg">
          
          </section>
          <section className="description">
            <div className="title">
              <motion.h1 initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.8, duration: 0.5}}>Story</motion.h1>
            </div>
            <motion.div className="info-hear" initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 1, duration: 0.7}}>
              <h2>Year</h2>
              <p>2019</p>
            </motion.div>
            <div className="info-text">
              <motion.div className="bord" initial={{ opacity: 0,width: 0}} animate={{ opacity: 1,width: 100}} transition={{delay: 1.3, duration: 0.7}}></motion.div>
                <motion.h5 initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.9, duration: 0.7}}>
                Um jogo de ação-aventura ambientado em um ambiente de mundo aberto 
                e jogado de uma perspectiva de terceira pessoa que ocorre pelo menos 
                uma geração antes dos eventos de  Beyond Good & Evil. Possui elementos 
                de interpretação de papéis mais tradicionais em comparação com o primeiro 
                jogo; o jogador gera um personagem que inicia o jogo "na base do sistema social". 
                O personagem pode ser masculino ou feminino. Conforme os jogadores completam 
                várias tarefas, eles melhoram em vários atributos e ganham espaçonaves e 
                membros da tripulação, que também podem melhorar com o tempo. Os jogadores 
                visitam planetas que têm suas próprias sociedades e, ao completar tarefas 
                nesses planetas, ganham novas tecnologias ou outras facetas para melhorar 
                suas espaçonaves. Seu diretor, Michel Ancel, disse que eles antecipam que 
                haverá um elemento narrativo que inclui eventos fixos da história, bem como 
                eventos baseados nas decisões que o jogador tomou ao explorar planetas.
                </motion.h5>
            </div>
            <div className="info-text-1">
            <motion.h5 initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.1, duration: 0.7}}> O jogo terá suporte para um jogador e jogador cooperativo; 
            mesmo como um único jogador, o jogador pode participar de um universo compartilhado, com 
            alguns eventos afetando todos os jogadores ao mesmo tempo. Beyond Good and Evil 2  exigirá 
            uma conexão com a Internet para jogar tanto no modo single player quanto no multiplayer.
            </motion.h5>
            </div>
            <div className="info-text-2">
            <motion.h5 initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.2, duration: 0.7}}> Beyond Good and Evil 2 ocorre no século 24 no Sistema 3 da Via 
            Láctea. O System 3 apresenta mundos como o Soma, que contêm locais como a cidade de Ganesha , 
            uma metrópole distópica com arquitetura e religiões inspiradas nas culturas do sudeste asiático 
            e religiões asiáticas, como o hinduísmo, combinados com elementos futuristas mais típicos, como 
            carros flutuantes e outdoors holográficos.
            <br></br>
            Acontece no mesmo universo de Beyond Good and Evil , e apresenta personagens do original, contando 
            suas histórias antes dos acontecimentos do primeiro jogo.
            </motion.h5>
            </div>
          </section>
        </div>
      </section>
  </section>;
};
