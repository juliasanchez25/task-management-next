import React from 'react';
import Head from 'next/head';
import { Home } from '@/components/home/Home';

const Index = () => {
  return (
    <>
      <Head>
        <title>Atividades | Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default Index;
