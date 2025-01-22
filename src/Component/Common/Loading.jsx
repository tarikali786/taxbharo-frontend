import BlueLogo from "../../assets/BlueLogo.webp";

export const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-44 transform transition-transform duration-800  animate-pulse">
        <img
          className="w-full h-full object-fill rounded-md"
          src={BlueLogo}
          alt="Loading"
        />
      </div>
    </div>
  );
};
