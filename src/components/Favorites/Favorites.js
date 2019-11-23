import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Favorites = ({ favoriteItem, deleteFromFavorite }) => {
  return (
    <div className="wrapper">
      <h1 className="favorites-title">Выбранные компании:</h1>
      <table className="favorites-table">
        <tbody className="favorites-table__body">
          {favoriteItem.map(el => (
            <tr key={el.id}>
              <td className="favorites-table__sponsor-star-column">
                {el.isSponsor == true && (
                  <img src="../../../sponsor-star.png" alt="sponsor-star" />
                )}
              </td>
              <td width="70" className="favorites-table__logo-column">
                {el.image ? (
                  <img
                    className="favorites-table__logo"
                    src={el.image}
                    alt="logo"
                  />
                ) : (
                  <p>{el.firstLettersOfName}</p>
                )}
              </td>
              <td className="title">
                <Link
                  className="favorites-table__title"
                  to={`instruments/${el.code}`}
                >
                  {el.title}
                </Link>
                <br />
                {el.isSponsor == true && (
                  <a className="favorites-table__sponsor-link" href={el.url}>
                    {el.shortUrl}{" "}
                  </a>
                )}
              </td>
              <td width="170" className="worksCount">
                {el.worksCount} проекта(-ов)
              </td>
              <td width="170" className="partnersCount">
                {el.partnersCount} партнера(-ов)
              </td>
              <td width="120" className="rate">
                {el.rate}
              </td>
              <td className="compare">
                <button
                  className="favorites-table__favorites-btn-del"
                  onClick={() => deleteFromFavorite({ el })}
                >
                  Удалить
                </button>
              </td>
              <td>
                {el.isSponsor == true && (
                  <span className="sponsor">СПОНСОР</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Favorites;
