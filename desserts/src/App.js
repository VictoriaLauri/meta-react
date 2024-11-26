import "./App.css";
import DessertsList from "./DessertsList";

/* The task is to use the array of objects[desserts], filter out the ones that are over 500 calories
and sort them by ascending calories amount and only use the name and calories values from the original
objects. Here we only work with the DessertsList module and apply sort, filter and map methods to 
achieve desired results */

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;