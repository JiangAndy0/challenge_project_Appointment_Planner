import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({infoArray}) => {
  return (
    <div>
      {infoArray.map( (infoObj, index) => <Tile infoObj={infoObj} key={`tile${index}`}/>)}
    </div>
  );
};
