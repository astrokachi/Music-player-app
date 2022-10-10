import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import PicCard from './components/PicCard';
// import Player from './components/Player';
import Sidebar from './components/Sidebar';

const Home = () => {
  useEffect(() => {
    const auth = async () => {
      const res = await fetch(
        'https://api.napster.com/v2.1/tracks/top?apikey=ZmZkM2U2MTUtOTVkOS00N2VkLWIxNGEtN2E5ZTMxMzEyMTI3'
      );
      const data = await res.json();
      console.log(data);
    };
    auth();
  }, []);
  return (
    <div className=''>
      <Nav />
      <Sidebar />
      <Hero />

      <div className="ml-20 mt-8">
        <header className="font-bold text-2xl">New releases.</header>
        <div className="flex overflow-scroll hide gap-8">
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
          <PicCard />
        </div>
      </div>

      
    </div>
  );
};

export default Home;
