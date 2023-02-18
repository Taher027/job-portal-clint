import React from "react";

const WorldWideIt = ({ worldIt }) => {
  const { Location, descriptions, name } = worldIt;
  console.log(worldIt);
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{Location}</p>
        <p>{descriptions}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default WorldWideIt;
