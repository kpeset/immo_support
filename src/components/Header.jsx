import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>IMMOLIEGE</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/houses">Nos maisons</Link>
      </nav>
    </header>
  );
}
