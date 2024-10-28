import Mail from "../../assets/Mail.png";

export const Email = () => {
  return (
    <div className="border rounded-full border-black-300 lg:w-1/2 md:full px-4 py-2 flex  items-center gap-4">
      <div className=" w-10 h-10">
        <img src={Mail} alt="" />
      </div>
      <p className=" text-xl font-semibold mb-[4px] ">Continue with Eamil</p>
    </div>
  );
};
