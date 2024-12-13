import Error from "../../../common/Error/";
import {Repositories} from "./Repositories/Repositories.jsx";
import Loading from "../../../common/Loading";

export const Content = ({status, repositories}) => {
  switch (status) {
    case 'initial':
      return null;

    case 'loading':
      return <Loading/>;

    case 'error':
      return <Error/>;

    case 'success':
      return <Repositories repositories={repositories}/>;

    default:
      throw new Error(`Unknown status: ${status}`);
  }
};