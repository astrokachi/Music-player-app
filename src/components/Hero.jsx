import React, { useEffect, useState } from 'react';
import photo from '../assets/photo.png';
import Background from '../assets/Vector.svg';
import likes from '../assets/Frame.svg';
import heart from '../assets/Heart.svg';
import back2 from '../assets/back2.svg';
import cover0 from '../assets/cover0.png';
import Card from './Card';

const Hero = ({ topCharts }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div
      className={`flex gap-6 pr-[2%] transition-all ease-in-out relative w-full duration-200 pb-10 ${
        windowSize.innerWidth < 1070 ? 'flex-col' : 'flex-row'
      }`}
    >
      <div
        className={`relative md:ml-20 mt-2 md:h-[300px] h-[340px] mb-10 ${
          windowSize.innerWidth < 1070 ? 'w-[full]' : 'w-[60%]'
        }`}
      >
        <div
          className={`bg-blueish flex md:rounded-[40px] w-full rounded-[20px] justify-between absolute z-[2]`}
          style={{
            backgroundImage: `url(${window.innerWidth > 767 ? Background : back2})`,
            backgroundPositionX: 'right',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="pt-10 pb-5 font-normal px-[6%]">
            <h3 className="text-sm">Currated playlist</h3>

            <section className="md:pt-20 pt-40">
              <header className="font-bold text-4xl">R & B Hits</header>
              <p className="mt-5">
                All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more
              </p>
            </section>

            <section className="mt-5 flex items-center gap-3">
              <img src={likes} alt="like" className="h-8 w-20" />
              <img src={heart} alt="heart" />
              <p>33k Likes</p>
            </section>
          </div>
          <img src={photo} alt="hero" className="md:block hidden" />
        </div>
        <div
          className="absolute w-[80%] h-[50%] bottom-0 bg-[#7A9096] left-[50%] translate-x-[-50%] z-[0] "
          style={{ filter: 'blur(52px)' }}
        ></div>
      </div>

      <div
        className={`mt-2 flex-grow ${
          windowSize.innerWidth < 1070 && windowSize.innerWidth > 768 ? 'ml-20 ' : 'ml-0'
        } ${windowSize.innerWidth <= 640 && 'ml-0'} `}
      >
        <header className="font-bold text-2xl">Top charts</header>
        <div className="overflow-x-scroll md:overflow-hidden md:flex-col flex-row w-full h-max flex md:gap-0 gap-4 hide">
          
          <Card name={'Everybody wants to rule the world'} artiste={'Tears for fears'} time={'4:00'} cover={cover0} />
          <Card name={'Everybody wants to rule the world'} artiste={'Tears for fears'} time={'4:00'} cover={cover0} />
          <Card name={'Everybody wants to rule the world'} artiste={'Tears for fears'} time={'4:00'} cover={cover0} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
