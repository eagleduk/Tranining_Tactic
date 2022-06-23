import { Link } from "react-router-dom";

export default function Navigate() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <details style={{ display: "none" }}>
        <summary>training</summary>
        <p>
          <Link to="/ladder">ladder training</Link>
        </p>
      </details>
      <details>
        <summary>tactics</summary>
        <p>
          <Link to="/sideplay1">Side Play1</Link>
        </p>
      </details>
    </nav>
  );
}
