import React, { Component } from "react";
import ItemInfo from "./ItemInfo";

class PreviewItem extends Component {
  render() {
    return (
      <li className="item">
        <ItemInfo item={this.props.item} type="preview" />
        <button
          className="remove-item"
          onClick={this.props._handleDelete.bind(this, this.props.item.id)}
        >
          x
        </button>
      </li>
    );
  }
}

export default PreviewItem;
