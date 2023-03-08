import React, { Component } from 'react'
import StudentService from './StudentService'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div>
                    <h3 className = "text-center"> View Student Details</h3>
                    <div >
                        <div >
                            <label> Student Id: </label>
                            <div> { this.state.student.id }</div>
                        </div>
                        <div >
                            <label> Student Name: </label>
                            <div> { this.state.student.name }</div>
                        </div>
                        <div >
                            <label> Student Dept: </label>
                            <div> { this.state.student.dept}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudentComponent