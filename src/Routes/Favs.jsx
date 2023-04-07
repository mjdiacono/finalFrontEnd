import { useContext } from "react";
import React from "react";
import Card from "../Components/Card";
import { getFav } from "../Components/utils/localStorage.service";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;
  const localFavs = getFav();

  return (
    <>
      <div
        className={`${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <h1>Dentists Favs</h1>
        <div className="card-grid container">
          {localFavs.length
            ? localFavs.map((favoriteDentist) => (
                <Card {...favoriteDentist} key={favoriteDentist.id} />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Favs;
