import React, { memo } from "react";

function ContadorHijo({ contador, sumar, restar }) {
  console.log("  Hijo Contador renderizadose ");
  return (
    <div className="m-2 border text-center border-slate-600 p-3 font-Lato font-semibold">
      <h2 className="text-xl text-center">Contador Hijo</h2>
      <div>
        <nav>
          <br />
          <h3 className="text-xl text-center">{contador}</h3>
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
    </div>
  );
}

export default memo(ContadorHijo);
