import { dummyShowsData } from "../assets/assets";
import BlurBG from "../components/BlurBG";
import Card from "../components/Card";

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurBG top="150px" left="0" />
      <BlurBG bottom="50px" right="50px" />
      <h1 className="text-lg font-medium my-4">Now showing</h1>

      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {dummyShowsData.map((movie) => (
          <Card key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-center">No movies available</h2>
    </div>
  );
};

export default Movies;
