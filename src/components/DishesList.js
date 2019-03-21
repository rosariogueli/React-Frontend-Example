import React, { Component } from "react";
import DishItem from "./DishItem";

class DishesList extends Component {
  render() {
    return (
      <ul className="item-picker">
        {this.props.items.map(item => {
          return (
            <DishItem
              item={item}
              key={`dish-item-${item.id}`}
              handleDrop={id => this.props.handleDrop(id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default DishesList;
