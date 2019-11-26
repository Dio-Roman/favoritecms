import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./style.scss";

const Instruments = ({
  list,
  sort,
  sortDirection,
  addToFavorite,
  deleteFromFavorite,
  favoriteItem,
  handeleSortData
}) => {
  let { url } = useRouteMatch();

  const [idSortButton, setIdSortButton] = useState();

  const handleClick = sortBy => {
    if (idSortButton !== sortBy) {
      handeleSortData(true, sortBy);
    } else {
      handeleSortData(false, sortBy);
    }
    setIdSortButton(sortBy);
    sort(sortBy);
  };

  const handleCompare = (el, e) => {
    e.target.checked ? addToFavorite(el) : deleteFromFavorite(el);
  };

  return (
    <table className="instruments-table">
      <thead className="instruments-table__head">
        <tr>
          <th width="20">{/* star */}</th>
          <th width="20">{/* лого */}</th>
          <th width="70">
            <label
              className="instruments-table__head-item head-item"
              id="title"
            >
              <input
                className="instruments-table__radio"
                type="radio"
                name="sort"
                value="title"
              />
              <p className="head-item__title" onClick={() => handleClick("")}>
                НАЗВАНИЕ
              </p>
            </label>
          </th>
          <th width="90">
            <label
              className="instruments-table__head-item head-item"
              id="works_count"
            >
              <input
                className="instruments-table__radio"
                type="radio"
                name="sort"
                value="works_count"
              />
              <p
                className="head-item__title"
                onClick={() => handleClick("works_count")}
              >
                ПРОЕКТЫ
                {sortDirection ? (
                  <span className="triangle triangle_down"></span>
                ) : (
                  <span className="triangle triangle_up"></span>
                )}{" "}
              </p>
            </label>
          </th>
          <th width="90">
            <label
              className="instruments-table__head-item head-item"
              id="partners_count"
            >
              <input
                className="instruments-table__radio"
                type="radio"
                name="sort"
                value="partners_count"
              />
              <p
                className="head-item__title"
                onClick={() => handleClick("partners_count")}
              >
                ПАРТНЕРЫ
                {sortDirection ? (
                  <span className="triangle triangle_down"></span>
                ) : (
                  <span className="triangle triangle_up"></span>
                )}{" "}
              </p>
            </label>
          </th>
          <th width="120">
            <label className="instruments-table__head-item head-item" id="rate">
              <input
                className="instruments-table__radio"
                type="radio"
                name="sort"
                value="rate"
              />
              <p
                className="head-item__title"
                onClick={() => handleClick("rate")}
              >
                ОЦЕНКА ПОЛЬЗОВАТЕЛЕЙ
                {sortDirection ? (
                  <span className="triangle triangle_down"></span>
                ) : (
                  <span className="triangle triangle_up"></span>
                )}
              </p>
            </label>
          </th>
          <th width="20" className="instruments-table__head-item">
            СРАВНИТЬ
          </th>
          <th width="20"></th>
        </tr>
      </thead>

      <tbody className="instruments-table__body">
        {list ? (
          list.map(el => (
            <tr key={el.id}>
              <td className="instruments-table__sponsor-star-column">
                {el.isSponsor == true && (
                  <img src="../../../sponsor-star.png" alt="sponsor-star" />
                )}
              </td>
              <td className="instruments-table__logo-column">
                {el.image ? (
                  <img
                    className="instruments-table__logo"
                    src={el.image}
                    alt="logo"
                  />
                ) : (
                  <p>{el.firstLettersOfName}</p>
                )}
              </td>
              <td>
                <Link
                  className="instruments-table__title"
                  to={`${url}/${el.code}`}
                >
                  {el.title}
                </Link>
                <br />
                {el.isSponsor == true && (
                  <a className="instruments-table__sponsor-link" href={el.url}>
                    {el.shortUrl}{" "}
                  </a>
                )}
              </td>
              <td className="worksCount">{el.worksCount} проекта(-ов)</td>
              <td className="partnersCount">
                {el.partnersCount} партнера(-ов)
              </td>
              <td className="rate">{el.rate}</td>
              <td className="compare">
                <label className="checkbox-custom">
                  <input
                    className="checkbox-custom__input"
                    type="checkbox"
                    onChange={e => handleCompare({ el }, e)}
                    checked={favoriteItem.some(elem => elem.id == el.id)}
                  />
                  <span className="checkbox-custom__span"></span>
                </label>
              </td>
              <td>
                {el.isSponsor == true && (
                  <span className="sponsor">СПОНСОР</span>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="loading">
              <span>Загрузка . . .</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Instruments;
