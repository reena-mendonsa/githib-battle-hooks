// import React from "react";
// function Final() {
//   return <h1 className="battle">Final</h1>;
// }

// export default Final;

import React from "react";
import { Link } from "react-router-dom";
import { useLocation, withRouter } from "react-router";

function Final(props) {
  let location = useLocation();
  console.log(props, "props");
  let user1 = location.state[0];
  let data1 = location.state[1];
  let user2 = location.state[2];
  let data2 = location.state[3];

  let darkMode = props.darkMode;

  let winner;
  let loser;

  if (
    data1.public_repos * 20 + data1.followers >
    data2.public_repos * 20 + data2.followers
  ) {
    winner = data1;
    loser = data2;
  } else {
    winner = data2;
    loser = data1;
  }

  return (
    <main className="pb-12">
      <section className="w-1/2 mx-auto flex justify-between mt-16">
       <div className="container flex">
          <div
            className={
              darkMode
                ? "flex-35 bg-gray-700 text-black p-6 rounded-md mr-10"
                : "flex-35 bg-gray-200 text-black p-6 rounded-md mr-10"
            }
          >
            <div className=" flex45 box">
              <h2 className="text-center winner">Winner</h2>
              <div>
                <img
                  src={winner.avatar_url}
                  alt={winner.login}
                  width="100"
                  className="w-full"
                />
              </div>
              <h5 className="text-center">
                Score: {winner.public_repos * 20 + winner.followers}
              </h5>
              <h2 className="">{winner.login}</h2>
              <div className="flex">
                <i className="fas fa-user text-red-400"></i>
                <h3 className=" wl-h3">{winner.name}</h3>
              </div>

              <div className="flex">
                <i className="fas fa-users text-blue-400"></i>
                <h3 className=" wl-h3">{winner.followers} Followers</h3>
              </div>
              <div className="flex">
                <i className="fas fa-users text-green-400"></i>
                <h3 className=" wl-h3">{winner.following} Following</h3>
              </div>
              <div className="flex">
                <i className="fas fa-code text-red-500"></i>
                <h3 className=" wl-h3">{winner.public_repos} Repositories</h3>
              </div>
            </div>
          </div>
          <div
            className={
              darkMode
                ? "flex-35 bg-gray-700 text-black p-6 rounded-md mr-10"
                : "flex-35 bg-gray-200 text-black p-6 rounded-md mr-10"
            }
          >
            <div className="flex45 box">
              <h2 className="text-center loser">Loser</h2>
              <div>
                <img
                  src={loser.avatar_url}
                  alt={winner.login}
                  width="100"
                  className="w-full"
                />
              </div>
              <h5 className="text-center font-bold ">
                Score: {loser.public_repos * 20 + winner.followers}
              </h5>
              <h2 className=" font-bold ">{loser.login}</h2>
              <div className="flex">
                <i className="fas fa-users icons" aria-hidden="true"></i>
                <h3 className="wl-h3">{loser.name}</h3>
              </div>

              <div className="flex">
                <i className="fas fa-users icons" aria-hidden="true"></i>
                <h3 className="wl-h3">{loser.followers} Followers</h3>
              </div>
              <div className="flex">
                <i className="fas fa-users icons" aria-hidden="true"></i>
                <h3 className="wl-h3">{loser.following} Following</h3>
              </div>
              <div className="flex">
                <i className="fas fa-code icons"></i>
                <h3 className="wl-h3">{loser.public_repos} Repositories</h3>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div className="text-center my-6">
        <Link to="/battle">
          <h3 className="inline-block bg-black text-white py-3 px-8 rounded-md font-bold">
            Reset
          </h3>
        </Link>
      </div>
    </main>
  );
}

export default withRouter(Final);
