import React, { useState, useEffect } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import SingleLanguage from "./SingleLanguage";
import Battle from "./Battle";
import Final from "./Final";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  let [data, setData] = useState(null);
  let [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <BrowserRouter>
      <div className={darkmode ? "dark-background" : ""}>
        <div className="container">
          <Header handleMode={() => handleMode()} darkmode={darkmode} />

          <Route path="/" exact>
            <Menu data={data} />
            <Main data={data} />
          </Route>

          <Route path="/post/">
            <Menu data={data} />
          </Route>

          <Route path="/post/:language" component={SingleLanguage}></Route>

          <Route path="/battle/" exact>
            <Battle />
          </Route>
          <Route path="/battle/final">
            <Final />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
