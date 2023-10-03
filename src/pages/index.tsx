import React from 'react';
import Head from 'next/head';
import { Home } from '@/pages/components/home/Home';

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
      <Home />
    </>
  );
};

export default Index;
