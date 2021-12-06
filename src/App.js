import { useEffect, useState } from "react";
import "./App.css";

const is_prod = 1;

const format = (seconds) => {
  if (seconds === -1) return "";
  if (seconds < 60) return seconds + " seconds";

  let mins = Math.floor(seconds / 60) + " mins ";
  let remaining_seconds = seconds % 60 === 0 ? "" : (seconds % 60) + " seconds";
  return mins + remaining_seconds;
};

function App() {
  const [count, setCount] = useState(-1);
  const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    const my_timer = setTimeout(() => {
      if (count === -1) return;
      setCount((count) => count - 1);
    }, 1_000);

    return () => {
      console.log("cleared");
      clearTimeout(my_timer);
    };
  });

  const clearButtonE = showMain ? null : (
    <button
      onClick={() => {
        setShowMain(true);
        setCount(-1);
      }}
    >
      Clear
    </button>
  );
  return (
    <div className="App">
      {showMain && (
        <button
          onClick={() =>
            setShowMain((main) => {
              setCount(is_prod ? 25 * 60 : 6); // prod: 25mins; dev: 6secs
              return !main;
            })
          }
        >
          25 mins
        </button>
      )}

      <br />
      {format(count)}

      <br />
      {clearButtonE}
    </div>
  );
}

export default App;
