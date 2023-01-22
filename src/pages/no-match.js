import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      <h1>404 this route doesn't exist</h1>
      <Link to={`/`} activeClassName="active">
        Go to Home
      </Link>
    </>
  );
}

export default NoMatch;
