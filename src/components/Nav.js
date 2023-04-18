import { Link } from "react-router-dom";

export default function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/parks">
        <div>PARKS</div>
      </Link>
    </div>
  );
};