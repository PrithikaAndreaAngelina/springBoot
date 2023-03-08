import React, { Component } from 'react'
import StudentService from './StudentService'

class CreateStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            dept: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({id: student.id,
                    name: student.name,
                    dept : student.dept
                });
            });
        }        
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {id: this.state.id, name: this.state.name, dept: this.state.dept};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/student');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/student');
            });
        }
    }
    
    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeDeptHandler= (event) => {
        this.setState({dept: event.target.value});
    }

    cancel(){
        this.props.history.push('/student');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center font-bold">Add Student</h3>
        }else{
            return <h3 className="text-center font-bold">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                 {
                                    this.getTitle()
                                }
                <br></br>
                <div class="w-full max-w-xs">
  <form class="bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Id
      </label>
      <input  value={this.state.id} onChange={this.changeIdNameHandler} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="id"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Name
      </label>
      <input    value={this.state.name} onChange={this.changeNameHandler} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"/>
    </div>


    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Dept
      </label>
      <input  value={this.state.dept} onChange={this.changeDeptHandler} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="dept"/>
    </div>


    <div class="flex items-center justify-between">
      <button onClick={this.saveOrUpdateStudent} class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Add
      </button>
      <button onClick={this.cancel.bind(this)} class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       cancel
      </button>
    </div>
  </form>
</div>
            </div>
        )
    }
}

export default CreateStudent