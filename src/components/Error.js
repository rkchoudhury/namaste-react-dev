import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Error</h1>
      <h2>{`Error Code ${error.status}`}</h2>
      <h3>{`${error.data}`}</h3>
    </div>
  );
};

export default Error;
