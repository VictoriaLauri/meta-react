import React from 'react';
import Fruits from './components/Fruits';
import Counter from './components/Counter';

function App() {

  const [fruits] = React.useState([
    {name: "Apple", id: 1},
    {name: "Banana", id: 2},
    {name: "Cherry", id: 3},
    {name: "Mango", id: 4},
    {name: "Orange", id: 5},
  ])

  return (
    <div className="App">
      <h1>Here is the list of fruits:</h1>
      <Fruits names={fruits} />
      <Counter number={fruits.length} />
    </div>
  );
}

export default App;
