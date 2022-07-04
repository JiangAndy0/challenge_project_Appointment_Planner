import React from "react";

export const Tile = ({infoObj}) => {

  return (
    <div className="tile-container">
      {Object.values(infoObj).map( (value, index) => {
        if (index === 0) {
          return <p className="tile-title" key={`p${index}`}>{value}</p>
        }
        return <p className="tile" key={`p${index}`}>{value}</p>
      })}
    </div>
  );
};
