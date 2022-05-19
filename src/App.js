import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Description from "./components/Description/Description";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Meal from "./components/Meal/Meal";
import MealDetail from "./components/MealDetail/MealDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="description" element={<Description></Description>}></Route>
        <Route path="/meal/:mealId" element={<MealDetail></MealDetail>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
