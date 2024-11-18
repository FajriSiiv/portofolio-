import { useLocation, useNavigate } from "react-router-dom";
import { animatePageOut } from "../utils/animation";

const TransitionLink = ({ href, label }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== href) {
      animatePageOut(href, navigate);
      console.log(location.pathname, "pathname");
    }
  };

  return (
    <button
      className="text-lg text-neutral-900 hover:text-neutral-700"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
