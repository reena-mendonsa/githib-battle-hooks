import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function App(props) {
  let [data, setData] = useState(null);

  useEffect(() => {
    let language = props.match.params.language;
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  if (!data) {
    return <Loader />;
  }

  let info = data.items;
  console.log(data.items);

  return (
    <ul className="grid">
      {info.map((post, i) => {
        return (
          <li className="list" key={post.id}>
            <div className="info">
              <h2># {i + 1}</h2>
              <img src={post.owner.avatar_url} alt="avatar" />
              <h3 className="active">{post.name}</h3>
            </div>

            <div className="flex justify-start">
              <i className="fa fa-user user" aria-hidden="true"></i>
              <p>{post.name}</p>
            </div>
            <div className="flex justify-start">
              <i className="fa fa-star star" aria-hidden="true"></i>
              <p>{post.stargazers_count} stars</p>
            </div>
            <div className="flex justify-start">
              <i className="fa fa-code-fork fork" aria-hidden="true"></i>
              <p>{post.forks} forks</p>
            </div>
            <div className="flex justify-start">
              <i
                className="fa fa-exclamation-triangle issue"
                aria-hidden="true"
              ></i>
              <p>{post.open_issues_count} open issues</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
