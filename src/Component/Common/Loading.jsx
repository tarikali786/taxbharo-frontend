export const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-44 transform transition-transform duration-800  animate-pulse">
        <img
          className="w-full h-full object-fill rounded-md"
          src={
            "https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.f73a0aaf.png&w=1920&q=75"
          }
          alt="Loading"
        />
      </div>
    </div>
  );
};
