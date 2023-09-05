import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProgressCard from './components/ProgressCard';
import * as s from './styled-index';
import Head from 'next/head';
import timeManagement from '../../public/assets/images/Thesis-amico.svg';

const Index = () => {
  return (
    <>
      <Head>
        <title>Home | Task Manager</title>
        <meta
          name="description"
          content="Explore todas as tarefas pendentes e priorize suas atividades com eficiência!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <s.Main>
        <div>
          <s.Title>Task Manager</s.Title>
          <s.Description>
            Organize-se, priorize e conquiste mais todos os dias! Sua
            produtividade na palma da mão.
          </s.Description>
          <Link href={'/tasks'}>
            <s.Button>Minhas tarefas</s.Button>
          </Link>
        </div>
        <s.ImageContainer>
          <Image
            src={timeManagement}
            alt="Imagem de uma pessoa organizando seu tempo"
          />
        </s.ImageContainer>
      </s.Main>
      <ProgressCard />
    </>
  );
};

export default Index;
