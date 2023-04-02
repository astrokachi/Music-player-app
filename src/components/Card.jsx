import React from 'react';
import heart from '../assets/Hearto.svg';

const Card = ({ cover, name, artiste, time }) => {
  return (
    <div className="flex md:items-center gap-4 bg-alt px-4 py-3 mt-2 rounded-[20px] justify-between w-max md:w-full">
      <div className="flex gap-4 md:flex-row flex-col">
        <img src={cover} alt='s' className="md:h-16 md:w-16 h-24 w-24 bg-slate-500 rounded-[10px] "></img>
        <div className="grid pt-1">
          <header className="leading-none text-base md:w-[130px]">{name}</header>
          <h4 className="text-trans text-xs md:pb-0 pb-4">{artiste}</h4>
          <h4 className="text-xs">{time}</h4>
        </div>
      </div>

      <div  className='pl-28 md:pl-0 h-max w-max'>
        <img src={heart} alt="" className="p-2 border border-trans rounded-[100%] h-[40px] w-[40px] md:h-max md:w-10" />
      </div>
    </div>
  );
};

export default Card;
