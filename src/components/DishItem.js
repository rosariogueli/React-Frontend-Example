import React, { Component } from "react";
import ItemInfo from "./ItemInfo";
import { DragSource } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(props.item.id);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
};

class DisheItem extends Component {
  render() {
    const { connectDragSource, item } = this.props;

    return connectDragSource(
      <li className="item" style={{ cursor: "move" }}>
        <ItemInfo item={item} type="dish" />
      </li>
    );
  }
}

export default DragSource("item", itemSource, collect)(DisheItem);
