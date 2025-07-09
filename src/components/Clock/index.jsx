import { useClock } from "../../hooks/useClock";
import { GoBackButton } from "../Buttons";

const Clock = () => {
  const time = useClock();

  return (
    <>
      <GoBackButton />
      <div className="flex justify-center items-center bg-white mt-[20px]">
        <div className="bg-indigo-800 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-lg">
          {time}
        </div>
      </div>
    </>
  );
};

export default Clock;
