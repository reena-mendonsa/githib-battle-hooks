import React, { useState } from "react";
import { Link } from "react-router-dom";

function Battle() {
  let [player1, setPlayer1] = useState("");
  let [data1, setData1] = useState("");
  let [click1, setClick1] = useState(false);
  let [player2, setPlayer2] = useState("");
  let [data2, setData2] = useState("");
  let [click2, setClick2] = useState(false);

  const handleChange1 = (event) => {
    setPlayer1(event.target.value);
  };

  const handleChange2 = (event) => {
    setPlayer2(event.target.value);
  };

  const handleSubmit1 = (event) => {
    // event.preventDefault();

    let id = event.target.id;
    console.log(id, player1);
    if (id === player1) {
      fetch(`https://api.github.com/users/${player1}`)
        .then((res) => res.json())
        .then((data) => {
          setData1(data);
          // setHideForm1(true);
          // setCloseUser1Data(false);
          // setInputText1("");
          setClick1(!click1);
        });
    }
  };

  const handleSubmit2 = (event) => {
    //    setClick2(!click2);
    let id = event.target.id;
    console.log(id, player2);
    if (id === player2) {
      fetch(`https://api.github.com/users/${player2}`)
        .then((res) => res.json())
        .then((data) => {
          setData2(data);
          // setHideForm1(true);
          // setCloseUser1Data(false);
          // setInputText1("");
          setClick2(!click2);
        });
    }
  };

  return (
    <div className="battle">
      <h2>Instructions</h2>
      <div className="flex justify-center">
        <div>
          <p>Enter two GitHub users</p>
          <i className="battle-icons fa fa-users fa-5x users"></i>
        </div>
        <div>
          <p>Battle</p>
          <i
            className="battle-icons fa fa-fighter-jet fa-5x jet"
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <p>See the Winner</p>
          <i
            className="battle-icons fa fa-trophy fa-5x trophy"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <h2>Players</h2>
      <div className="flex">
        <div>
          <p>Player One</p>
          {!click1 ? (
            <div className="flex justify-start">
              <input
                placeholder="github username"
                value={player1}
                onChange={handleChange1}
              />
              <button onClick={handleSubmit1} id={player1} className="submit">
                Submit
              </button>
            </div>
          ) : (
            <div className="list large">
              <h4>{player1}</h4>
            </div>
          )}
        </div>
        <div>
          <p>Player Two</p>
          {!click2 ? (
            <div className="flex justify-start">
              <input
                placeholder="github username"
                value={player2}
                onChange={handleChange2}
              />
              <button onClick={handleSubmit2} id={player2} className="submit">
                Submit
              </button>
            </div>
          ) : (
            <div className="list large">
              <h4>{player2}</h4>
            </div>
          )}
        </div>
      </div>
      {click1 && click2 ? (
        <Link
          to={{
            pathname: "/battle/final",
            state: [player1, data1, player2, data2],
          }}
          exact
        >
          <button className="battle-btn">Battle</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default Battle;
