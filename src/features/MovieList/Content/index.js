import Error from "../../../common/Error/";
import Loading from "../../../common/Loading";

// import Repositories from "../../../common/Repositories";

function Repositories(props) {
  return null;
}

Repositories.propTypes = {};
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