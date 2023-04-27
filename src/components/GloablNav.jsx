import menu from "../static/data/menu"
import "../static/css/GlobalNav.css"
import { useState } from "react"

function GloablNav({setPage}) {
  const [showMenu, setShowMenu] = useState(false);

  
  const menulist = menu.map(item => {
    return (
      <li key={item.name}>
        <a className="global-nav-link"
          href={item.path} 
          onClick={e => { 
            e.preventDefault(); 
            setPage(item.name);
            }}
            >
            {item.name}
          </a>
      </li>
    )
  });

  const menuClass = showMenu ? "global-nav-list--open" : "";

  return (
    <nav className="global-nav">
      <button
        className="global-nav-toggle"
        onClick={()=> setShowMenu(!showMenu)}
        aria-label={showMenu ? "Close Menu" : "Open Menu"}      
      >
      <i className="gg-menu-round"></i>
      </button> 
        
      <ul className={`global-nav-list ${menuClass}`}>
        {menulist}
      </ul>
    </nav>
  )
};

export default GloablNav;