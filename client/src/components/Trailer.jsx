import { useState } from "react";
import ReactPlayer from "react-player";
import { PlayCircleIcon } from "lucide-react";
import { dummyTrailers } from "../assets/assets.js";
import BlurBG from "./BlurBG.jsx";

const Trailer = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6">
        <BlurBG top="-100px" right="-100px" />

        <ReactPlayer
          className="mx-auto max-w-full"
          url={currentTrailer.videoUrl}
          controls={false}
          width="940px"
          height="540px"
        />
      </div>

      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => {
          <div
            className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 cursor-pointer"
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              className="rounded-lg w-full h-full object-cover brightness-75"
              src={trailer.image}
              alt="trailer"
            />

            <PlayCircleIcon
              className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
              strokeWidth={1.6}
            />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Trailer;
