import {useNavigate} from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToActorDetails = (id) => {
    navigate(`/person/${id}`);
  };

  // You can add other function ex. goToHome, goToSearch etc.
  return { goToActorDetails };
};