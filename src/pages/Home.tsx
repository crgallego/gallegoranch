import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Story from '../components/Story';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Products />
      <Story />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;