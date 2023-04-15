import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const menuNav = [
    { title: "Home", slug: "/" },
    { title: "CompanyInfo", slug: "/companyinfo" },
    { title: "Login", slug: "/login" },
  ];
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo" onClick={()=> setClick(false)}>
            MoviesOnline
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {menuNav.map((item) => {
              const { title, slug } = item;
              return (
                <li className="nav-item" key={title}>
                  <NavLink
                    exact
                    to={slug}
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <ImCross /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
