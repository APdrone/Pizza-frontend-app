// import './App.css';
// import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import UserRoutes from "./components/UserRoutes";
// import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      {/* <Home /> */}
      {/* </div> */}
      {/* <Navigation /> */}
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;
