import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        monsters: []
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log(this.state)
      }))
  }

  render() {
    console.log('render');
    return (
      <div className="App">

        <input 
        className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange={(event) => {
          console.log(event);

          // Get the input text
          const inputText = event.target.value;

          // Get the monsters from the API each time a 
          // change occurs in the value
          fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((monsters) => {

              // Filter the monsters to get the only
              // the ones that start with the input text
              monsters = monsters.filter((monster) => monster.name.startsWith(inputText))

              // setState to the new filtered monsters array
              this.setState(() => {
                return {monsters: monsters};
              },
              () => {
                console.log(this.state);
              })
            })
        }}/>

        {
          this.state.monsters.map((monster) => {
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
