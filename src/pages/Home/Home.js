import React from "react";
import BdTopCompanys from "./BdTopCompanys/BdTopCompanys";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeJobs from "./HomeJobs/HomeJobs";
import WorldWideIts from "./WorldWiteIt/WorldWideIts";

const Home = () => {
  return (
    <section>
      <HomeBanner></HomeBanner>
      <HomeJobs></HomeJobs>
      <BdTopCompanys></BdTopCompanys>
      <WorldWideIts></WorldWideIts>
    </section>
  );
};

export default Home;
