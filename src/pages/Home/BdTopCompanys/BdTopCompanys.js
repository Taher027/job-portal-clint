import React, { useEffect, useState } from "react";
import BdTopCompany from "../BdTopCompany/BdTopCompany";

const BdTopCompanys = () => {
  const [bdIt, setBdIt] = useState([]);
  const url = "http://localhost:5000/bditcompany";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBdIt(data));
  }, []);
  return (
    <section className="py-24">
      <div>
        <h2 className="text-4xl text-black font-bold text-center">
          Top 3 Leading Company In Bangladesh
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {bdIt.map((it) => (
          <BdTopCompany key={it.id} it={it}></BdTopCompany>
        ))}
      </div>
    </section>
  );
};

export default BdTopCompanys;
