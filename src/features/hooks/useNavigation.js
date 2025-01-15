import {useNavigate} from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToActorDetails = (id) => {
    navigate(`/person/${id}`);
  };

  // Możesz dodać inne funkcje np. goToHome, goToSearch itd.
  return { goToActorDetails };
};