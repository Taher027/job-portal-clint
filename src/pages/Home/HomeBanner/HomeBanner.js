import React from "react";
import img from "../../../assests/search.jpg";

const HomeBanner = () => {
  return (
    <section>
      <div className="hero pt-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} alt="imag" className="max-w-sm " />
          <div>
            <h1 className="text-xl font-semibold ">
              Easiest way to find a perfect job
            </h1>
            <h2 className="py-6 text-5xl text-black font-bold">
              Find Your Next <br /> Dream Job
            </h2>
            <button className="btn btn-sm btn-primary">
              Looking For A Job?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
