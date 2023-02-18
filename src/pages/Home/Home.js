import React from "react";
import BdTopCompanys from "./BdTopCompanys/BdTopCompanys";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeJobs from "./HomeJobs/HomeJobs";

const Home = () => {
  return (
    <section>
      <HomeBanner></HomeBanner>
      <HomeJobs></HomeJobs>
      <BdTopCompanys></BdTopCompanys>
    </section>
  );
};

export default Home;
