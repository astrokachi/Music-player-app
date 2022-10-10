import React from 'react';
import home from '../assets/Home.svg';
import playlist from '../assets/playlist.svg';
import radio from '../assets/radio.svg';
import videos from '../assets/videos.svg';
import profile from '../assets/profile.svg';
import logout from '../assets/Logout.svg';

const Sidebar = () => {
  return (
    <div className="fixed mt-10 md:block hidden z-10">
      <section className=" bg-alt py-8 rounded-[32px] ">
        <div className="flex flex-col items-center justify-center px-3 gap-8">
          <img src={home} alt="home" className="cursor-pointer" />
          <img src={playlist} alt="collection" className="cursor-pointer" />
          <img src={radio} alt="home" className="cursor-pointer" />
          <img src={videos} alt="home" className="cursor-pointer" />
        </div>
      </section>
      <section className=" bg-alt py-8 rounded-[32px] mt-10">
        <div className="flex flex-col items-center justify-center px-3 gap-8">
          <img src={profile} alt="home" className="cursor-pointer" />
          <img src={logout} alt="home" className="cursor-pointer" />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
