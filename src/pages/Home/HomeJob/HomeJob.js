import React from "react";

const HomeJob = ({ job }) => {
  const { title, descriptions, img } = job;
  return (
    <section>
      <div className="card card-compact sm:w-full lg:w-96 bg-base-100 shadow-xl text-black">
        <figure>
          <img src={img} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{title}</h2>
          <p>{descriptions}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Jobs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeJob;
