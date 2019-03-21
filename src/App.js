import React, { Component } from "react";
import "./App.css";
import DishesList from "./components/DishesList";
import dishesData from "./items.js";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import PreviewListContainer from "./components/PreviewListContainer";
import { isUndefined } from "util";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dishes: dishesData,
      selected_dishes: []
    };
  }

  // get item id and add it to the list of selected items.
  handleDrop(id) {
    this.setState(prevState => {
      const item = prevState.dishes.find(item => item.id === id);

      // add item only once.
      if (!prevState.selected_dishes.find(item => item.id === id)) {
        prevState.selected_dishes.push(item);
      }

      return prevState;
    });
  }

  removeSelectedDish(id) {
    this.setState(prevState => ({
      selected_dishes: prevState.selected_dishes.filter(item => item.id !== id)
    }));
  }

  getAllSelectedDietariesGroups() {
    let selected_dietaries = {};

    this.state.selected_dishes.forEach(item => {
      // some dishes items don't have dietaries, assign an empty array.
      if (isUndefined(item.dietaries)) {
        item.dietaries = [];
      }

      item.dietaries.forEach(dietary => {
        if (isUndefined(selected_dietaries[dietary])) {
          selected_dietaries[dietary] = 0;
        }

        selected_dietaries[dietary]++;
      });
    });
    return selected_dietaries;
  }

  render() {
    const selectedDietariesGroups = this.getAllSelectedDietariesGroups();
    const selectedDietariesGroupsList = Object.keys(
      selectedDietariesGroups
    ).map(dietary => {
      return (
        <React.Fragment key={dietary + "-group"}>
          {selectedDietariesGroups[dietary]}x{" "}
          <span className="dietary">{dietary}</span>
        </React.Fragment>
      );
    });

    return (
      <div className="wrapper">
        <div className="menu-summary">
          <div className="container">
            <div className="row">
              <div className="col-6 menu-summary-left">
                <span>{this.state.selected_dishes.length} items</span>
              </div>
              <div className="col-6 menu-summary-right">
                {selectedDietariesGroupsList}
              </div>
            </div>
          </div>
        </div>
        <div className="container menu-builder">
          <div className="row">
            <div className="col-4">
              <DishesList
                items={this.state.dishes}
                handleDrop={this.handleDrop.bind(this)}
              />
            </div>
            <PreviewListContainer
              items={this.state.selected_dishes}
              _handleDelete={this.removeSelectedDish.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
