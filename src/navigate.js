import { Link } from "react-router-dom";

export default function Navigate() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/ladder">ladder training</Link>
        </li>
      </ul>
    </nav>
  );
}
