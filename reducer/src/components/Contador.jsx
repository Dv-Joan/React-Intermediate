import React, { useState, useReducer } from "react";

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Contador() {
  //   const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="font-Roboto text-2xl m-3">
        Contador{" "}
        <span className="bg-orange-500 rounded-md py-1 px-3 mx-2 text-white">
          Reducer
        </span>{" "}
        : {state.count}
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        // onClick={() => setContador(contador + 1)}
        onClick={() => dispatch({ type: "increment" })}
      >
        Incrementar
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        // onClick={() => setContador(contador - 1)}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrementar
      </button>
    </div>
  );
}

export default Contador;
