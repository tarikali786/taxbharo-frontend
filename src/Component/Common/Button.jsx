import { Link } from "react-router-dom";

export const Button = ({ text = "Search", link, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={link}
      className={`bg-blue-500 md:px-6 md:py-2 px-2 py-1 rounded-md text-white-500  transform transition-transform  animate-pulse `}
    >
      {text}
    </Link>
  );
};
