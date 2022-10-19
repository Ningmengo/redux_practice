import Profile from "./component/Profile";
import Login from "./component/Login";
import "../src/component/stylesheet.css";
import ChangeColor from "./component/ChangeColor";

function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <Login></Login>
      <ChangeColor></ChangeColor>
    </div>
  );
}

export default App;
