import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  // This is how the state is used in the context of a functional component, here state is not an object. For each value in the state, you'll have to call useState(). What is passed into the useState() is the initial value you want that value to have. It returns the value and the setter for that value in the state.
  const [searchField, setsearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // Produces a side effect
  // Takes a callback that runs the very first time the component is rendered, and it only ever runs again when the variables, that are the dependencies, that are passed as the second argument change. The second argument is an array of variables.
  // So, in this case, it only ever runs once, only when the component is first rendered
  useEffect(() => {
    // Fetch the monters using the api and set the monsters in state to the ones we got from the api
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
  }, []);
  // The function that is passed to the searchbox component which changes the searchField in the state so that the cardlist component will be rerendered with the new input value and a new list of monsters that match the searchField
  const onSearchChange = (event) => {
    // Get the input text
    const searchField = event.target.value.toLowerCase();
    // setState to the new searchField from the input search box
    setsearchField(searchField);
  }
  // Monsters are filtered only when monsters or searchField is updated for efficiency
  useEffect(() => {
    // Filter the monsters using the searchField before sending it to the UI
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(searchField)
    });
    // Set filteredMonsters to newFilteredMonsters in the state
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  // All of this is rendered as the UI
  return(
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler = {onSearchChange} 
        placeholder = 'search monsters'
      /> 
      <CardList monsters={filteredMonsters} />
    </div>
  );
};


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//         monsters: [],
//         searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       }))
//   }

//   onSearchChange = (event) => {

//     // Get the input text
//     const searchField = event.target.value.toLowerCase();

//     // setState to the new searchField from the input search box
//     this.setState(() => {
//       return {searchField};
//     });

//   }

//   render() {

//     // Use destructuring to get the fields out of
//     // this.state and this, to make our variables
//     // look shorter and code easier to read

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     // Filter the monsters to get the only
//     // the ones where thier name includes the input text
//     let filteredMonsters = monsters
//       .filter((monster) => {
//         return monster.name
//           .toLowerCase()
//           .includes(searchField)
//       });

//     return (
//       <div className="App">

//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox
//           className='monsters-search-box'
//           onChangeHandler = {onSearchChange} 
//           placeholder = 'search monsters'
//         /> 

//         <CardList monsters={filteredMonsters} />

//       </div>
//     );
//   }
// }

export default App;
