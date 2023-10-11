import { useEffect } from "react";
import { useState } from "react";

const ExampleUseEffect = () => {
  const fetchData = async () => {
    const res = await fetch("https://firstact-api.thinc.in.th/courses");
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>ExampleUseEffect</h2>
    </div>
  );
};

export default ExampleUseEffect;
