import React from 'react';

const HamIcons = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-6 cursor-pointer">
      {<img src={icon} alt="home" className="h-12 w-12 pt-2" />}
      <h2>{text}</h2>
    </div>
  );
};

export default HamIcons;
