import React from 'react';
import CourseRow from './CourseRow';
import CourseService from '../services/CourseService';

export default class CourseList extends React.Component {
  constructor() {
    super();
    
    this.courseService = CourseService.instance;
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    this.courseService.findAllCourses().then((courses) => {
      this.setState({
        courses: courses,
      })
    })
  }

  courseRows = () => {
    let rows = this.state.courses.map((course) => {
        return <CourseRow course={course} />
      }
    )
    return (rows);
  }

  titleChanged = (event) => {
    this.setState({
      course: { 
        title: event.target.value
      }
    })
  }

  createCourse = () => {
    console.log(this.state.course);
  }

  render() {
    return (
      <div>
        <h2>Course List</h2>
        <table>
          <thead>
            <tr><th>Title</th></tr>
            <tr><th><input id="titleFld" placeholder="cs101" onChange={this.titleChanged}/></th>
            <th><button class="btn btn-primary" onClick={this.createCourse}>Add</button></th>
            </tr>
          </thead>
          <tbody>
            {this.courseRows()}
          </tbody>
        </table>
      </div>
    )
  }
}
