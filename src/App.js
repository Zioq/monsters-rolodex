import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";
class App extends Component {
  constructor() {
    super();

    // State: which is that changes because of user interaction
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // State gets turns into props into all these componenets that we pass it down.
  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            )
          }
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
