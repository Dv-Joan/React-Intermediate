import React, { useState, useCallback, useMemo } from "react";
import ContadorHijo from "./ContadorHijo";

function Contador() {
  const [contador, setContador] = useState(0);
  const sumar = useCallback(() => setContador(contador + 1), [contador]);
  const restar = useCallback(() => setContador(contador - 1), [contador]);
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);

  const superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 10000000; i++) {
      numero = numero + 1;
    }
  }, []);
  return (
    <div className="font-Roboto">
      <h2 className="text-xl text-center m-5">Contador Padre</h2>
      <div className="flex flex-col justify-center items-center">
        <nav>
          <h3 className="text-xl text-center">{contador}</h3>
          <br />
          <button
            onClick={sumar}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            +
          </button>
          <button
            onClick={restar}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            -
          </button>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          className="m-3 px-3 py-1 border-slate-700 border   rounded-full font-Roboto"
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
      <h3 className="text-xl text-center">{superNumero}</h3>
    </div>
  );
}

export default Contador;
