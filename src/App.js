import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p></p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Nikita', lastName: 'Pursani'},
      company: 'ZTM'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}, {this.state.company}</p>

          <button onClick={() => {
            this.setState({name: {firstName: 'Andrei', lastName: "Neaigoi"}});
            console.log(this.state);
          }}> 
            Change Name 
          </button>

        </header>
      </div>
    );
  }
}

export default App;
