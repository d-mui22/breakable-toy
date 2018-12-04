import React, { Component } from 'react';
import GolfCourseShow from '../components/GolfCourseShow'

class GolfCoursesShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_courses: [],
      error: ''
    }
  }

  componentDidMount(){
    fetch (`/api/v1/golf_courses/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      debugger
      this.setState({
        new_courses: [body.golf_course]
      });
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    let courses = this.state.new_courses.map(course => {
      debugger
      return(
        <GolfCourseShow
          key={course.id}
          id={course.id}
          name={course.name}
        />
      )
    })

    return(
     <div>
      {courses}
     </div>
    )
  }
}

export default GolfCoursesShowContainer;
