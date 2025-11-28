import "./components.css";

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="logo">
        <img src="" />
        <p>NEXT EP0CH L4BS</p>
      </div>
      <nav className="nav-links">
        <a className="nav-link" href="">About</a>
        <a className="nav-link" href="">Works</a>
        <a className="nav-link" href="">Projects</a>
        <a className="nav-link" href="">Why Us</a>
        <a className="nav-link" href="">Contact</a>
      </nav>
    </div>
  )
}