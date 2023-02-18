import React, { useEffect, useState } from "react";
import HomeJob from "../HomeJob/HomeJob";

const HomeJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobcollections")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-black py-12">
        Find Your dream Job!
      </h2>
      <div className="grid lg:grid-cols-2">
        {jobs.map((job) => (
          <HomeJob key={job.id} job={job}></HomeJob>
        ))}
      </div>
    </section>
  );
};

export default HomeJobs;
