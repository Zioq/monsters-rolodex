import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { SearchBox } from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();

    // State: which is that changes because of user interaction
    this.state = {
      monsters: [],
      searchField: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  //A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  // State gets turns into props into all these componenets that we pass it down.
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="serach monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
