import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentsList from "./components/StudentsList/studentsList";
import {addStudent, deleteStudent, listStudents, modifyStudent} from "./repository/studentRepository";
import EditStudentDetails from "./components/EditStudentDetails/editStudentDetails";
import {
    addStudyProgram,
    deleteStudyProgram,
    listStudyPrograms,
    modifyStudyProgram
} from "./repository/studyProgramRepository";
import StudyProgramList from "./components/StudyProgramsList/studyProgramsList";
import EditProgram from "./components/EditProgramComponent/editProgram";
import AddStudent from "./components/AddStudent/addStudent";
import AddStudyProgram from "./components/AddStudyProgram/addStudyProgram";

class App extends Component {

    constructor(props){
        super(props);

        this.state={
            students: [],
            showEditStudent: false,
            showAddStudent: false,
            selectedStudent: -1,
            studyPrograms:[],
            showEditProgram: false,
            showAddProgram: false,
            selectedProgram: -1
        }
    }

    componentDidMount(){
        this.loadData();
    }

    loadData = () =>{
        listStudents()
            .then(response => response.json())
            .then((data)=>{
                this.setState(()=>({
                    students:data
                }))
            });

        listStudyPrograms()
            .then(response => response.json())
            .then((data)=>{
                this.setState(()=>({
                    studyPrograms:data
                }))
            });

    };

    showAddStudentComponent = () =>{
        if(this.state.showAddStudent===false) {
            this.setState({
                showAddStudent: true
            })
        }else{
            this.setState({
                showAddStudent: false
            })
        }
    };

    showAddStudyProgramComponent = () =>{
        if(this.state.showAddProgram===false) {
            this.setState({
                showAddProgram: true
            })
        }else{
            this.setState({
                showAddProgram: false
            })
        }
    };

    showEditStudentComponent = (index) => {
        if(this.state.showEditStudent===false) {
            this.setState({
                showEditStudent: true,
                selectedStudent: index
            });
        }else{
            this.setState({
                showEditStudent: false,
                selectedStudent: index
            });
        }
    };

    showEditProgramComponent = (index) => {
        if(this.state.showEditProgram===false) {
            this.setState({
                showEditProgram: true,
                selectedProgram: index
            });
        }else{
            this.setState({
                showEditProgram: false,
                selectedProgram: index
            });
        }
    };

    onFormSubmitStudent = (student) => {

        if(student.name==="" || student.lastName==="" || student.studyProgram==="") {
            alert("Missing information!");
            return;
        }

       modifyStudent(student)
           .then(response=>{
               this.loadData();
               console.log(response);
               if(response.status!==200) alert("Error!");
           });
        this.setState({showEditStudent:false});
    };

    onFormSubmitStudyProgram = (studyProgram) => {

        modifyStudyProgram(studyProgram)
           .then(response=>{
               this.loadData();
               console.log(response);
               if(response.status!==200)
                   alert("Error!");
           });
        this.setState({showEditProgram:false});
    };

    addStudentItem = (student) => {

        if(student.index==="" || student.name==="" || student.lastName==="" || student.studyProgram==="") {
            alert("Missing information!");
            return;
        }

        addStudent(student)
            .then(response=>{
                this.loadData();
                console.log(response);
                if(response.status!==200)
                    alert("Error!");
            });
        this.setState({showAddStudent:false})
    };

    addProgramItem = (studyProgram) =>{

        if(studyProgram.name==="") {
            alert("Missing information!");
            return;
        }

        addStudyProgram(studyProgram)
            .then(response=>{
                this.loadData();
                console.log(response);
                if(response.status!==200)
                    alert("Study program with given name exists!");
            });
        this.setState({showAddProgram:false})
    };

    deleteStudentById = (index) =>{
        console.log("-- deleting student --\n");
       deleteStudent(index)
           .then(response=>{
               this.loadData();
               console.log(response);
           })
    };

    deleteStudyProgramByName = (index,name) =>{

        deleteStudyProgram(index, name)
            .then(response=>{
            this.loadData();
            console.log(response);
            if(response.status!==200)
                alert("Cant delete study program with students enrolled!");
        })
    };

    render(){

        return(
     <div>
         <h2>Students
             <button id={'addStudent'} className={'btn'} onClick={this.showAddStudentComponent}>Add</button>
         </h2>

         <AddStudent shown={this.state.showAddStudent}
                     add={this.addStudentItem}
                     studyPrograms={this.state.studyPrograms}/>

         <StudentsList students={this.state.students}
                       itemClick={this.showEditStudentComponent}
                       itemDelete={this.deleteStudentById}/>

         <EditStudentDetails shown={this.state.showEditStudent}
                             formSubmit={this.onFormSubmitStudent}
                             student={this.state.students[this.state.selectedStudent]}
                             studyPrograms={this.state.studyPrograms}/>

         <h2>Study Programs
             <button id={'addStudyProgram'} className={'btn'} onClick={this.showAddStudyProgramComponent}>Add</button>
         </h2>

         <AddStudyProgram shown={this.state.showAddProgram} add={this.addProgramItem}/>

         <StudyProgramList studyPrograms={this.state.studyPrograms}
                           editStudyProgram={this.showEditProgramComponent}
                           deleteStudyProgram={this.deleteStudyProgramByName}/>

         <EditProgram shown={this.state.showEditProgram}
                      formSubmit={this.onFormSubmitStudyProgram}
                      studyProgram={this.state.studyPrograms[this.state.selectedProgram]}
                      />

     </div>

    );
  }
}

export default App;
