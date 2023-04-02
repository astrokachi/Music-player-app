import React, { useContext } from 'react';
import music from '../assets/Logo.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import home from '../assets/Home.svg';
import playlist from '../assets/playlist.svg';
import radio from '../assets/radio.svg';
import videos from '../assets/videos.svg';
import profile from '../assets/profile.svg';
import logout from '../assets/Logout.svg';
// import { useState } from 'react';
import HamIcons from './HamIcons';
import { StateContext } from '../context/share';

const Nav = () => {
  const { toggle, setToggle } = useContext(StateContext);
  
  const auth = async () => {
    window.location.replace('http://www.last.fm/api/auth/?api_key=5505959ff8488ab08d95bb5b7dcdff84');
  };


  return (
    <div className={`flex items-center gap-9 md:px-2 `}>
      <img
        src={menu}
        alt="menu"
        className="md:hidden block cursor-pointer"
        onClick={() => setToggle({ close: false, open: true })}
      />
      <img src={music} alt="music" className="cursor-pointer " />
      <div className="flex md:items-center gap-5 md:px-6 py-7 w-[90%] justify-end md:justify-start transition-all duration-150 ease-in-out">
        <img src={search} alt="search" className="md:h-4 md:w-4 h-6 w-6" />
        <input
          placeholder="Search artists"
          className="bg-primary outline-none hidden md:block border-none font-semibold placeholder:text-trans md:flex-grow transition-all duration-150 ease-in-out"
        />
      </div>

      <div
        className={`absolute md:hidden top-0 h-screen z-20  translate-x-[800px] bg-alt w-[100%] right-0 px-6 py-8 ${
          toggle.close && 'animate-closing'
        } ${toggle.open && 'animate-sliding'}`}
      >
        <img src={close} alt="close" className="h-6 w-6 " onClick={() => setToggle({ open: false, close: true })} />

        <div className="grid pt-5 pl-[5%] text-trans gap-10">
          <HamIcons icon={home} text="Home" />
          <HamIcons icon={playlist} text="My Collections" />
          <HamIcons icon={radio} text="Radio" />
          <HamIcons icon={videos} text="Music Videos" />
          <HamIcons icon={profile} text="Profile" onClick={auth}/>
          <HamIcons icon={logout} text="Log out" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
