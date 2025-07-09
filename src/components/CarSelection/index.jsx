import { useState } from "react";
import { GoBackButton } from "../Buttons";

const CarSelection = () => {
  const cars = [
    "Mercedes S600",
    "BMW M5",
    "Audi A8",
    "Lexus LS",
    "Porsche Panamera",
  ];
  const colors = ["Black", "White", "Silver", "Blue", "Red"];

  const [result, setResult] = useState(`${colors[0]} - ${cars[0]}`);
  const [currentCar, setCurrentCar] = useState(cars[0]);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const handleCarChange = (event) => {
    const selectedCar = event.target.value;
    setCurrentCar(selectedCar);
    setResult(`${currentColor} - ${selectedCar}`);
  };

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setCurrentColor(selectedColor);
    setResult(`${selectedColor} - ${currentCar}`);
  };

  return (
    <>
      <GoBackButton />
      <h1 className="my-[20px] font-bold text-3xl">Select your car</h1>
      <div style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "50px" }}>Select a car</span>
        <span>
          <select name="cars" id="cars" onChange={handleCarChange}>
            {cars.map((car, index) => (
              <option key={index} value={car}>
                {car}
              </option>
            ))}
          </select>
        </span>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "50px" }}>Select a color</span>
        <span>
          <select name="colors" id="colors" onChange={handleColorChange}>
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </span>
      </div>

      <div className="font-bold">You selected a {result}</div>
    </>
  );
};

export default CarSelection;
