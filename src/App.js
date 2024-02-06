import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        monsters: [],
        searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }))
  }

  onSearchChange = (event) => {

    // Get the input text
    const searchField = event.target.value.toLowerCase();

    // setState to the new searchField from the input search box
    this.setState(() => {
      return {searchField};
    });

  }

  render() {
    console.log('render');

    // Use destructuring to get the fields out of
    // this.state and this, to make our variables
    // look shorter and code easier to read

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // Filter the monsters to get the only
    // the ones where thier name includes the input text
    let filteredMonsters = monsters
      .filter((monster) => {
        return monster.name
          .toLowerCase()
          .includes(searchField)
      });

    return (
      <div className="App">

        <input 
        className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange={onSearchChange}/>

        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }

      </div>
    );
  }
}

export default App;
