import { Link } from "react-router-dom";

export const Button = ({ text = "Search", link, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={link}
      className="relative bg-blue-500 md:px-6 md:py-2 px-4 py-2 rounded-md text-white-500  text-center transition-transform duration-300 hover:scale-105 
                 shadow-[0_0_20px_rgba(71,98,255,0.7),0_0_40px_rgba(71,98,255,0.5),0_0_60px_rgba(71,98,255,0.3)] 
                 hover:shadow-[0_0_25px_rgba(71,98,255,1),0_0_50px_rgba(71,98,255,0.8),0_0_75px_rgba(71,98,255,0.6)]"
    >
      {text}
    </Link>
  );
};
