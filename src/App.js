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

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) =>
            this.setState({ searchField: e.target.value })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
