import Cell from "./components/Cell";
import { useEffect, useState } from "react";
const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);

  const [go, setGo] = useState("cross");
  const [winMsg, setWinMsg] = useState(null);
  const [count,setCount]= useState(4);
  const [tog,setTog] = useState(true)

  const msg = "It is now" + " " + go + " " + "go!! ";

  console.log(cells, "check");

  const handleTheme=()=>{
setTog(!tog);
  }
  const reClock = () => {
    setTimeout(() => {
      handleReset();
      setWinMsg("");
      setCells(["", "", "", "", "", "", "", "", ""]);
    }, 4000);
  };

  const CheckScore = () => {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winArr.forEach((ele) => {
      let circleWins = ele.every((cell) => cells[cell] === "circle");

      let corssWins = ele.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setWinMsg(`ArryaBhatta won Game, rest in ${count} second`);
        reClock();
        return;
      }
      if (corssWins) {
        setWinMsg(`W.C. Röntgen won Game, rest in ${count} second`);
        reClock();
        return;
      }
    });
  };
  const handleReset = () => {
    // to reset class for each element
    console.log(document.getElementById("1"));
    let i = 0;
    do {
      document.getElementById(i)?.classList.remove("cross") ||
        document.getElementById(i)?.classList.remove("circle");
      i++;
    } while (i < cells.length);
    setCells(["", "", "", "", "", "", "", "", ""]);
  };

  useEffect(() => {
    CheckScore();
  }, [cells]);

  return (
    <div className={tog === true ?'app':'app1'}>
    <div className="head"><h1>Tic-Tac-Toe</h1></div>
      <div className="gameboard">
        {cells.map((cell, index) => {
          return (
            <Cell
              key={index}
              id={index}
              setGo={setGo}
              setCells={setCells}
              cell={cell}
              cells={cells}
              go={go}
              winMsg={winMsg}
            />
          );
        })}
      </div>
      <div>
        <h2 className="msg">{msg}</h2>
      </div>
      <div>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div>
        <p>{winMsg}</p>
      </div>

      <button onClick={handleTheme} className="btntheme">Change theme</button>
    </div>
  );
};

export default App;
