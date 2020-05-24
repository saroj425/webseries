import React from "react";
import "./App.css";
import Card from "./Cards/Cards";
import Sdata from "./Sdata/Sdata";

const App = () => (
  <>
    <h1 className="heading-style">List of 6 Netflix series in 2020</h1>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
    ;
  </>
);

export default App;
