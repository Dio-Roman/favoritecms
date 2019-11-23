import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Nav = ({ favoriteItem }) => {
  return (
    <nav className="nav">
      <img className="nav__logo" src="../../../logo.png" alt="logo" />
      <ul className="nav__list first-list">
        <li className="nav__item">
          <a className="nav__link" href="/">
            ЖУРНАЛ
          </a>
        </li>
        <li>
          <a className="nav__link" href="/">
            АГЕНТСТВА
          </a>
        </li>
        <li>
          <NavLink
            className="nav__link"
            to={`/instruments`}
            activeClassName="nav__link_active"
            exact={true}
          >
            ИНСТРУМЕНТЫ
          </NavLink>
        </li>
      </ul>
      <ul className="nav__list">
        <li>
          <img src="../../../star-icon.png" alt="star-icon" />
          <NavLink
            className="nav__link"
            to={`/favorites`}
            activeClassName="nav__link_active"
          >
            Избранное
          </NavLink>
          <span className="count">{favoriteItem.length}</span>
        </li>
        <li>
          <img src="../../../search-icon.png" alt="search-icon" />
          <a className="nav__link" href="/">
            Поиск
          </a>
        </li>
        <li>
          <img src="../../../cabinet-icon.png" alt="cabinet-icon" />
          <a className="nav__link" href="/">
            Кабинет агентства
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
