import React from 'react';
import CourseRow from './CourseRow';

export default class CourseList extends React.Component {
   constructor() {
       super();
   }
   render() {
       return (
        <div>
          <h2>Course List</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <CourseRow />
              <CourseRow />
              <CourseRow />
            </tbody>
          </table>
        </div>
       )
   }
}
