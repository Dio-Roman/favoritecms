import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Instruments from "./components/Instruments";
import Favorites from "./components/Favorites";

const App = () => {
  const [list, setList] = useState();

  useEffect(() => {
    fetch(
      "https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=1"
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => setList(data.data));
  }, []);

  const [sortData, setSortData] = useState({ direction: true, sortBy: "" });

  const handeleSortData = (flag, sortBy) => {
    setSortData({
      direction: flag ? flag : !sortData.direction,
      sortBy: sortBy
    });
    setList();
  };

  const [page, setPage] = useState(2);

  const fetchUrl = () => {
    fetch(
      `https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=${page}&sort_direction=${
        sortData.direction ? "asc" : "desc"
      }&sort=${sortData.sortBy}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data =>
        setList(prevState => {
          return [...prevState, ...data.data];
        })
      )
      .then(setPage(page + 1));
  };

  // --- подгоузка по скролу ---
  // useEffect(e => {
  //   let sum = 0;

  //   window.addEventListener("scroll", () => {
  //     sum = window.innerHeight + window.pageYOffset + 4;
  //   });

  //   document.addEventListener("scroll", () => {
  //     if (sum >= document.documentElement.scrollHeight) {
  //       page++;
  //       // console.log(sortData)
  //       fetchUrl()

  //       // document.documentElement.scrollTo(0,0) //прокрутка наверх
  //     }
  //   });
  // }, []);

  const sort = sortBy => {
    fetch(
      `https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=1&sort_direction=${
        sortData.direction ? "asc" : "desc"
      }&sort=${sortBy}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => setList(data.data));
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/instruments">
            <Instruments
              list={list}
              sort={sort}
              handeleSortData={handeleSortData}
              sortDirection={sortData.direction}
            />
            <button className="more-btn" onClick={() => fetchUrl()}>
              Показать больше
            </button>
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
