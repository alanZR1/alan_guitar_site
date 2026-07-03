import {Link} from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
  const menu = [
    { name: "Home", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Videos", path: "/videos" },
    { name: "Gear", path: "/gear" },
    { name: "Presets", path: "/presets" },
    { name: "Contact", path: "/contact" }
  ]; 

  return (
          <nav className="navbar">
            
            <div className="logo">
              <Link to="/">
                Alan Guitar
              </Link> 
            </div>
            
            <div className="menu">
              {
                menu.map((item) => (
                  <Link key={item.path} to ={item.path}>
                    {item.name}
                  </Link>
                ))
              }
            </div>

          </nav>
    );
};


export default Navbar;