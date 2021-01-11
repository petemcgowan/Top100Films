import React from "react";

import afiData from "../Json/Films.json";

/*

Currently getting the array and a function is outputting each element.

a)
b) Need to convert it to a table.  Copy how Films is doing this

*/


export const Films = () => {
  return (
    <>
      <div className="film-list">
        {afiData.map((data, key) => {
          return (
            <div key={key}>
              {data.title +
                " , " +
                data.rank}
            </div>
          );
        })}
      </div>
    </>
  );
};