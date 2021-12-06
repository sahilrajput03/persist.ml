import { useEffect, useState } from "react";
import "./App.css";
import "./w3school-toggle.css";

const is_prod = 0;

const format = (seconds) => {
  if (seconds === -1) return "";
  if (seconds < 60) return seconds + " seconds";

  let mins = Math.floor(seconds / 60) + " mins ";
  let remaining_seconds = seconds % 60 === 0 ? "" : (seconds % 60) + " seconds";
  return mins + remaining_seconds;
};

const getProductionState = localStorage.getItem("set_is_production") || 0;

function App() {
  const [is_production, set_is_production] = useState(getProductionState);
  const [count, setCount] = useState(-1);
  const [showMain, setShowMain] = useState(true);
  const [showBreak, setShowBreak] = useState(true);

  useEffect(() => {
    if (count === -1) {
      setShowMain(true);
      setShowBreak(true);
    }
    const my_timer = setTimeout(() => {
      if (count === -1) return;
      setCount((count) => count - 1);
    }, 1_000);

    return () => {
      console.log("cleared");
      clearTimeout(my_timer);
    };
  });

  const clearButtonE =
    showMain && showBreak ? null : (
      <button
        className="btn-clear"
        onClick={() => {
          setShowMain(true);
          setShowBreak(true);
          setCount(-1);
        }}
      >
        Clear
      </button>
    );
  return (
    <div className="main-container">
      <div>{format(count)}</div>
      <div className="row">
        {showMain && (
          <button
            className="main-timer"
            onClick={() => {
              setCount(is_production ? 25 * 60 : 6); // prod: 25mins; dev: 6secs
              setShowMain(false);
              setShowBreak(true);
            }}
          >
            Start Pomodoro: 25 mins
          </button>
        )}

        {showBreak && (
          <button
            className="break-timer"
            onClick={() => {
              setCount(is_production ? 5 * 60 : 3); // prod: 5mins; dev: 3secs
              setShowBreak(false);
              setShowMain(true);
            }}
          >
            Start BREAK: 5 mins
          </button>
        )}
        {clearButtonE}
      </div>
      <div className="row bottom">
        <div className="column environment-label">Production:</div>
        <label className="switch">
          <input
            type="checkbox"
            checked={is_production}
            onChange={(e) => {
              const { checked } = e.target;
              // console.log(checked);

              set_is_production(checked ? 1 : 0);
              localStorage.setItem("set_is_production", checked ? "x" : "");
            }}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
