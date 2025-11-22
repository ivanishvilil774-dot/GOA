import Cars from "./components/cars";

function App() {
  const carsArr = [
    { name: "BMW M3", year: 2020 },
    { name: "Mercedes C63", year: 2019 },
    { name: "Audi RS7", year: 2021 },
    { name: "Porsche 911", year: 2022 },
    { name: "Toyota Supra", year: 2020 },
    { name: "Nissan GTR", year: 2018 },
    { name: "Ford Mustang GT", year: 2023 },
    { name: "Chevrolet Camaro SS", year: 2021 },
    { name: "Lamborghini Huracán", year: 2022 },
    { name: "Ferrari 488", year: 2019 }
  ];

  return <Cars cars={carsArr} />;
}

export default App;
