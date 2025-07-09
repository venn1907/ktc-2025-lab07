import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CarSelection from "./components/CarSelection";
import Timer from "./components/Timer";
import Clock from "./components/Clock";

function App() {
  const paths = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/car-selection",
      element: <CarSelection />,
    },
    {
      path: "/timer",
      element: <Timer />,
    },
    {
      path: "/clock",
      element: <Clock />,
    },
  ];

  return (
    <Routes>
      {paths.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
