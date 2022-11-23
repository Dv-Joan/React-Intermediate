import Contador from "./Components/Contador";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center m-7 p-2">
        <h3 className="text-center font-bold font-Roboto text-slate-800 text-3xl">
          Memorizacion en React
        </h3>
      </div>
      <Contador />
    </div>
  );
}

export default App;
