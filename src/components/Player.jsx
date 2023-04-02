import React, { useEffect } from "react";
import { useState } from "react";
import playimage from "../assets/playimage.png";
import shuffle from "../assets/shuffle.svg";
import previous from "../assets/previous.svg";
import play from "../assets/play.svg";
import next from "../assets/next.svg";
import repeatone from "../assets/repeate-one.svg";
import progress from "../assets/progress.svg";
import volume from "../assets/volume-high.svg";
import volumeprog from "../assets/volumeprog.svg";

const Player = () => {
	return (
		<div
			className="fixed bottom-0 z-10 bg-opacity-40 w-full text-light py-4 bg-primary filter px-4"
			style={{ backdropFilter: "blur(4px)" }}
		>
			<div className="flex justify-between w-[33%]">
				<div className="flex gap-4 max-w-full">
					<img src={playimage} alt="s" className="w-[49px] h-[49px]"></img>
					<div>
						<h2 className="font-bold">Seasons in</h2>
						<h3 className="text-trans font-bold text-sm">James</h3>
					</div>
				</div>
				{/* second div */}
				<div className=" max-w-full">
					<div className="flex gap-10 justify-center">
						<img src={shuffle} alt="" />
						<img src={previous} alt="" />
						<img
							src={play}
							alt=""
							className="p-3 rounded-[50%] bg-secondary w-10 h-10"
						/>
						<img src={next} alt="" />
						<img src={repeatone} alt="" />
					</div>
					<div>
						<img src={progress} alt="" />
					</div>
				</div>

				{/* third div */}
				<div className="flex justify-center max-w-full">
					<div className="flex gap-2">
						<img src={volume} alt="" className="w-4" />
						<img src={volumeprog} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;
