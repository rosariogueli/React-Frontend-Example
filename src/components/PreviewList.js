import React, { Component } from "react";
import PreviewItem from "./PreviewItem";

class PreviewList extends Component {
  render() {
    const items = this.props.items.map((item, i) => {
      return (
        <PreviewItem
          key={`preview-item-${item.id}-${i}`}
          item={item}
          _handleDelete={this.props._handleDelete.bind(this)}
        />
      );
    });

    return (
      <ul className="menu-preview">
        {items.length ? (
          items
        ) : (
          <li className="item">
            No items in this list, please drag &amp; drop form the left.
          </li>
        )}
      </ul>
    );
  }
}

export default PreviewList;
