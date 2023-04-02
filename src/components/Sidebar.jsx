import React from 'react';
import home from '../assets/Home.svg';
import playlist from '../assets/playlist.svg';
import radio from '../assets/radio.svg';
import videos from '../assets/videos.svg';
import profile from '../assets/profile.svg';
import logout from '../assets/Logout.svg';

const Sidebar = () => {
  const auth = async () => {
    window.location.replace('http://www.last.fm/api/auth/?api_key=5505959ff8488ab08d95bb5b7dcdff84');
  };

  return (
    <div className="fixed md:block hidden z-10 mt-2">
      <section className=" bg-alt py-5 rounded-[32px] ">
        <div className="flex flex-col items-center justify-center px-3 gap-8">
          <img src={home} alt="home" className="cursor-pointer w-[22px] "  />
          <img src={playlist} alt="collection" className="cursor-pointer w-[22px]" />
          <img src={radio} alt="home" className="cursor-pointer w-[22px]" />
          <img src={videos} alt="home" className="cursor-pointer w-[22px]" />
        </div>
      </section>
      <section className=" bg-alt py-5 rounded-[32px] mt-8">
        <div className="flex flex-col items-center justify-center px-3 gap-8">
          <img src={profile} alt="home" className="cursor-pointer w-[22px]" onClick={auth} />
          <img src={logout} alt="home" className="cursor-pointer w-[22px]" />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
