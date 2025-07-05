import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurBG from "./BlurBG";

const Feature = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurBG top="0" right="-80px" />
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <button
          className="group flex items-center gap-2 text-sm text-gray-300c cursor-pointer"
          onClick={() => navigate("/movies")}
        >
          View All
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
        </button>
      </div>

      <div></div>

      <div className="flex justify-center mt-20">
        <button
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Feature;
