import React from "react";
import "./App.css";
import Netflix from "./Netflix/Netflix";
import Amazon from "./Amazon/Amazon";

const favSeries = "amazon";

// const FavS = () => {
//   if (favSeries === "amazon") {
//     return <Netflix />;
//   } else {
//     return <Amazon />;
//   }
// };

const App = () => (
  <>
    <h1 className="heading-style">List of 6 Netflix series in 2020</h1>;
    {/* <FavS /> */}
    {favSeries === "amazon" ? <Amazon /> : <Netflix />}
  </>
);

export default App;
