import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import PicCard from './components/PicCard';
// import Player from './components/Player';
import Sidebar from './components/Sidebar';

const Home = ({ topCharts }) => {

  return (
    <div className=''>
      <Nav />
      <Sidebar />
      <Hero topCharts={topCharts?.tracks?.track}/>

      <div className="md:ml-20 ml-0 mt-8">
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
