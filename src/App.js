import React, {Component} from "react";
import CourseForm from "./components/courseForm";
import CourseList from "./components/courseList";
class App extends Component {
  state = {
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'jQuery'},
    ],
    current: ''
  }
  // update course
  updateCourse = (e) =>{
    this.setState({
      current: e.target.value
    })
  }

  // add course
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses  = this.state.courses;
    if(current = current){
      courses.push({name:current})
    this.setState({
      courses,
      current: ' '
    })
    }
  }
  // delete course
  deletecourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    });
  }
 
  // edit course
    editCourse = (index,value) =>{
      let courses = this.state.courses;
      let course = courses[index];
      course['name'] = value;
      this.setState({
        course
      })
    }

  render(){
    const {courses} = this.state;
    const courseList = courses.map((course, index)  => {
      return <CourseList details={course} key={index} index={index} update={this.handleChange} deletecourse={this.deletecourse} editCourse={this.editCourse}/>
    })
    return(
      
        <div className="App">
          <h2> add course</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/> 
        <ul> 
          
        
        { this.state.courses.length ? courseList: <p>No Courses To Show! Please Add New Course.</p>} 

        </ul>
          </div>
     
    )
  }
}
export default App;
