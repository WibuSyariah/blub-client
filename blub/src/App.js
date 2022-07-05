import { Routes, Route } from "react-router-dom";
import ContentPage from "./views/ContentPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/" element={<ContentPage></ContentPage>}></Route>
        </Routes>
      </div>
      ;
    </>
  );
}

export default App;
