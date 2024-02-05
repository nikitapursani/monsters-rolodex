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

  render() {
    console.log('render');

    // Filter the monsters to get the only
    // the ones where thier name includes the input text
    let filteredMonsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(this.state.searchField));

    return (
      <div className="App">

        <input 
        className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange={(event) => {

          // Get the input text
          const searchField = event.target.value.toLowerCase();

          // setState to the new searchField from the input search box
          this.setState(() => {
            return {searchField: searchField};
          });

        }}/>

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
