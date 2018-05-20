import React from 'react';

export default class CourseRow extends React.Component {
  constructor(props) { 
    super(props); 
  }

  delete = () => {
    this.props.delete(this.props.course.id);
  }

  render() {
      return (
        <tr>
          <td>{this.props.course.title}</td>
          <td><button className={'btn btn-danger'} onClick={this.delete}>Delete</button></td>
        </tr>
      )
  }
}
