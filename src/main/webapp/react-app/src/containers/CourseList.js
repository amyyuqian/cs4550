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

  findAllCourses = () => {
    this.courseService.findAllCourses()
        .then((courses) => {
            this.setState({courses: courses});
        });
 }

  componentDidMount() {
    this.findAllCourses();
  }

  courseRows = () => {
    let rows = this.state.courses.map((course) => {
        return <CourseRow course={course} key={course.id}
          delete={this.deleteCourse}/>
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

  deleteCourse = (courseId) => {
    this.courseService.deleteCourse(courseId);
  }

  createCourse = () => {
    this.courseService.createCourse(this.state.course)
      .then(() => { this.findAllCourses(); 
      });
  }
  

  render() {
    return (
      <div>
        <div className="ml-3">
          <h5>Course List</h5>
        </div>
        <table className={'table'}>
          <thead>
            <tr><th><input className="form-control col-md-4" id="titleFld" 
              placeholder="cs101" onChange={this.titleChanged}/></th>
            <th><button className="btn btn-primary my-2 my-sm-0" onClick={this.createCourse}>Add</button></th>
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
