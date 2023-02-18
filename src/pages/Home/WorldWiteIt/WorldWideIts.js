import React, { useEffect, useState } from "react";
import WorldWideIt from "./WorldWideIt";

const WorldWideIts = () => {
  const [worldIts, setWorldIts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/worldwideit")
      .then((res) => res.json())
      .then((data) => setWorldIts(data));
  }, []);
  return (
    <section>
      <div>
        <h2 className="text-center text-4xl text-black font-bold">
          Top There World Wide It Company
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-8 gap-6">
        {worldIts.map((worldIt) => (
          <WorldWideIt key={worldIt.id} worldIt={worldIt}></WorldWideIt>
        ))}
      </div>
    </section>
  );
};

export default WorldWideIts;
