import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api");
      const data = await res.json();

      console.log(data);
    };

    get();
  }, []);

  return <div className="App"></div>;
}

export default App;
