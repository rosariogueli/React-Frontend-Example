import React, { Component } from "react";
import PreviewList from "./PreviewList";
import { DropTarget } from "react-dnd";

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
};

class PreviewListContainer extends Component {
  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="col-8">
        <h2>Menu preview</h2>
        <PreviewList
          items={this.props.items}
          _handleDelete={this.props._handleDelete.bind(this)}
        />
      </div>
    );
  }
}

export default DropTarget("item", {}, collect)(PreviewListContainer);
