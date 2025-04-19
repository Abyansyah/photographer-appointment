import { FeaturedPhotographers } from '@/components/home/FeaturedPhotographers';
import { Hero } from '@/components/home/Hero';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedPhotographers />
    </>
  );
};

export default Home;
