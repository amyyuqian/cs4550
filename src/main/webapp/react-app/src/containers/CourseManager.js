import React from 'react';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class CourseManager extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <nav className="navbar navbar-dark bg-primary">
              <span className="navbar-brand mb-0 h1">Course Manager</span>
              <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/course/list">Course List </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                  </li>
                </ul>
              </div>
            </nav>
            <Route path="/course/list" component={CourseList}></Route>
            <Route path="/course/:courseId/edit" component={CourseEditor}></Route>
          </div>
        </Router>
      )
  }
}
