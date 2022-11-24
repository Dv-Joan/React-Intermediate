import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <h3 className="font-Roboto text-2xl m-3">useContext API</h3>
        <br />
        <MyPage />
        <MyPageContext />
      </div>
    </div>
  );
}

export default App;
