import "./styles.css";
import proxyImage from "./img/dp.JPG";

import personProxy from "./utils/proxy";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    personProxy.name;

    personProxy.name = "Nuwan";
    personProxy.age = 55;
    personProxy.nationality = "Canadian";
  }, []);
  return (
    <div className="App">
      <h1>Proxy Design Pattern - Demo</h1>
      <h3>Use Case: A proxy can be useful to add validation. </h3>
      <img src={proxyImage} alt="Proxy Image" />

      <hr />
      <h3>Please refer to the console</h3>
    </div>
  );
}
