import { ChevronLeftIcon } from "lucide-react";
import BlurBG from "./BlurBG";

const DateSelect = ({ datetime, id }) => {
  return (
    <div className="pt-30" id="dateSelect">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg">
        <BlurBG top="-100px" left="-100px" />
        <BlurBG top="100px" right="0" />

        <div>
          <p className="text-lg font-semibold">Choose Date</p>
          <div className="flex items-center gap-6 text-sm mt-5">
            <ChevronLeftIcon width={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
