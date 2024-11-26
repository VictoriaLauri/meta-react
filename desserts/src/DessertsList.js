function DessertsList (props) {
    const newList = props.data
    .filter (obj => obj.calories < 500)
    .sort ((a,b) => a.calories - b.calories)
    .map (obj => <li>{obj.name} - {obj.calories} calories</li>);
    return <ul>{newList}</ul>;
}

export default DessertsList;

/* props.data give access to desserts array of objects.
    We create a new array newList in which we manipulate desserts array to filter it,
    sort it - sort method sorts strings by default so we use comp function to receive correct results,
    and map it to extract only the values we require.  
    In JS ES6 single arg does not require parentheses, and if the function fits on one line, 
    no curly braces are necessary. Return is implied in arrow function by default
    */

/* Here is alternative syntax from Meta:

const DessertsList = (props) => {
 const lowCaloriesDesserts = props.data
   .filter((dessert) => {
     return dessert.calories < 500;
   })
   .sort((a, b) => { 
     return a.calories - b.calories; 
   })
   .map((dessert) => { 
     return ( 
       <li>
         {dessert.name} - {dessert.calories} cal 
       </li> 
     ); 
   }); 
 return <ul>{lowCaloriesDesserts}</ul>; 

}
export default DessertsList; 

*/