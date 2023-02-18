import React from "react";

const BdTopCompany = ({ it }) => {
  const { name, sector } = it;
  //   console.log(it);
  return (
    <section>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{sector}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BdTopCompany;
