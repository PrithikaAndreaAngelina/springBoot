import React, { Component } from 'react'
import StudentService from './StudentService'

class ListStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                student: []
        }
        // this.addStudent = this.addStudent.bind(this);
        // this.editStudent = this.editStudent.bind(this);
        // this.deleteStudent = this.deleteStudent.bind(this);
    }

    // deleteStudent(id){
    //     StudentService.deleteStudent(id).then( res => {
    //         this.setState({student: this.state.student.filter(student => tudent.id !== id)});
    //     });
    // }
    // viewStudent(id){
    //     this.props.history.push(`/view-student/${id}`);
    // }
    // editStudent(id){
    //     this.props.history.push(`/add-student/${id}`);
    // }

    componentDidMount(){
        StudentService.getStudent().then((res) => {
            this.setState({ student: res.data});
        });
    }

    // addStudent(){
    //     this.props.history.push('/add-student/_add');
    // }
    render() {
        return (
            <div>
                <div class="text-center">
                <h2 class="text-2xl font-bold">Student Table</h2>
                </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Student ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Student Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Department
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.student.map(
                                student => 
                                <tr key = {student.id}>
                                    <td class="text-black"> {student.id} </td>
                                    <td class="text-black">{student.name}</td>
                                    <td class="text-black">{student.dept}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default ListStudent