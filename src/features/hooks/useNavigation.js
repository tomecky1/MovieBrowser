import {useNavigate} from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();
  const goToActorDetails = (id) => {
    navigate(`/person/${id}`);
  };
  return { goToActorDetails };
};