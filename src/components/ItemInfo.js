import React, { Component } from "react";

class ItemInfo extends Component {
  render() {
    const dietaries = this.props.item.dietaries.map(dietary => {
      return (
        <span className="dietary" key={`${this.props.type}-item-${dietary}`}>
          {dietary}
        </span>
      );
    });

    return (
      <React.Fragment>
        <h2>{this.props.item.name}</h2>
        <p>
          {dietaries.length ? (
            dietaries
          ) : (
            <span style={{ fontSize: 12 }}>No dietary info.</span>
          )}
        </p>
      </React.Fragment>
    );
  }
}

export default ItemInfo;
