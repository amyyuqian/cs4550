import React from 'react';

export default class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: ''
    };
  }

  componentDidMount() {
    this.selectCourse(this.props.match.params.courseId);
  }

  componentWillReceiveProps(newProps){
    this.selectCourse(newProps.match.params.courseId);
  }
 
  
  selectCourse = (courseId) => {
    this.setState({ courseId: courseId });
  }

  render() {
    return (
        <h3>Course {this.state.courseId}</h3>
    )
  }
}
