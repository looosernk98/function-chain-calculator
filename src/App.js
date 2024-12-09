import React from 'react'
import Function from "./components/function";
import { useEffect, useState } from "react";
import { calculator } from "./utils/util";
import { INITIAL_DATA } from "./utils/constants";
import "./App.css";


function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [error, setError] = useState(false);

  const updateFunctions = (funcObject) => {
    const funcObjIndex = data.functions.findIndex(
      (item) => item.name === funcObject.name
    );
    const copiedData = [...data.functions];
    copiedData[funcObjIndex] = funcObject;

    const updatedData = {
      ...data,
      functions: copiedData,
    };
    setError(funcObject.error ? true : false);
    setData(updatedData);
  };
  const update = (obj) => {
    setData({ ...data, ...obj });
  };

  useEffect(() => {
    if (error || !data.initialInput) {
      if (!data.initialInput) setData({ ...data, finalOutput: "" });
      return;
    }
    let startIndex = data.functions.findIndex(
      (item) => item.name === data.entryPoint
    );
    const val = calculator(data.functions, startIndex, data.initialInput);
    setData({
      ...data,
      finalOutput: val,
    });
  }, [data.functions, data.finalOutput, data.initialInput]);

  return (
    <main>
      <h2>Function Chain Calculator</h2>
      <div className="container">
        {data?.functions.map((funcData, index) => (
          <Function
            key={index}
            functionData={funcData}
            update={update}
            updateFunctions={updateFunctions}
            data={data}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
