import React from "react";
import Menu from "../../../../../components/Menu";

import { loadFromLocalStorage } from "../../../../../utils";

const Favourites = ({ setBookmarkQuery }) => {
  const favouritesList = loadFromLocalStorage("queryData");
  return (
    <div>
      <Menu options={favouritesList} label="Favourites" onClick={setBookmarkQuery} />
    </div>
  );
};

export default Favourites;
