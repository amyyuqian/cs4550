import React from 'react';

export default class ModuleRow extends React.Component {
  delete = () => {
    this.props.delete(this.props.module.id);
  }

  render() {
    return (
      <li className="list-group-item justify-content-between w-25">
        {this.props.module.title}
        <button onClick={this.delete} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    )
  }
}