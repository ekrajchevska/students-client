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
        this.setState({
            showAddStudent: true
        })
    };

    showAddStudyProgramComponent = () =>{
        this.setState({
            showAddProgram:true
        })
    };

    showEditStudentComponent = (index) => {
        //console.log(this.state.selectedStudent)
        this.setState({
            showEditStudent: true,
            selectedStudent: index
        });
    };

    showEditProgramComponent = (index) => {
        //console.log(this.state.selectedStudent)
        this.setState({
            showEditProgram: true,
            selectedProgram: index
        });
    };

    onFormSubmitStudent = (student) => {

       /* this.setState((state) => {
                let tmpStudents = state.students;
                tmpStudents[state.selectedStudent] = student;

                return {
                    students: tmpStudents,
                    showEditStudent: false,
                    selectedStudent: -1
                }
            })*/
       modifyStudent(student)
           .then(response=>{
               this.loadData();
               console.log(response);
           });
        this.setState({showEditStudent:false});
    };

    onFormSubmitStudyProgram = (studyProgram) => {

       /* this.setState((state) => {
            if(studyProgram.name===""){
                this.setState({
                    showEditProgram: false
                })
            }else {
                let tmpPrograms = state.studyPrograms;
                tmpPrograms[state.selectedProgram] = studyProgram;

                return {
                    studyPrograms: tmpPrograms,
                    showEditProgram: false,
                    selectedProgram: -1
                }
            }
        })*/
       modifyStudyProgram(studyProgram)
           .then(response=>{
               this.loadData();
               console.log(response);
           });
        this.setState({showEditProgram:false});
    };

    addStudentItem = (student) => {

        /* if(student.index==="" || student.name==="" || student.lastName==="")
             return;
         this.setState((state) => {
             let tmpStudents = state.students;
             if(!tmpStudents.find(element =>{
                 return element.index === student.index;}))
                 tmpStudents[state.students.length] = student;

             return{
                 students: tmpStudents,
                 showAddStudent: false,
                 selectedIndex: -1
             }
         })*/
        addStudent(student)
            .then(response=>{
                this.loadData();
                console.log(response);
            });
        this.setState({showAddStudent:false})
    };

    addProgramItem = (studyProgram) =>{

        if(studyProgram.name==="")
            return;

        addStudyProgram(studyProgram)
            .then(response=>{
                this.loadData();
                console.log(response);
            });
        this.setState({showAddProgram:false})
    };

    deleteStudentById = (index) =>{
       /* this.setState((state)=>{
            let tmpStudents = state.students;
            tmpStudents.splice(index,1);
            return{
                students: tmpStudents,
                showEditStudent: false,
                //selectedStudent: -1
            }
        })*/
        console.log("app-delete");
       deleteStudent(index)
           .then(response=>{
               this.loadData();
               console.log(response);
           })
    };

    deleteStudyProgramById = (index) =>{
        /*this.setState((state)=>{
            let tmpPrograms = state.studyPrograms;
            tmpPrograms.splice(index,1);
            return{
                studyPrograms: tmpPrograms,
                showEditProgram: false,
                //selectedProgram: -1
            }
        })*/
        deleteStudyProgram(index)
            .then(response=>{
            this.loadData();
            console.log(response);
        })
    };

    render(){

        return(
     <div>
         <h2>Students
             <button className={'btn'} onClick={this.showAddStudentComponent}>Add</button>
         </h2>

         <StudentsList students={this.state.students}
                       itemClick={this.showEditStudentComponent}
                       itemDelete={this.deleteStudentById}/>

         <EditStudentDetails shown={this.state.showEditStudent}
                             formSubmit={this.onFormSubmitStudent}
                             student={this.state.students[this.state.selectedStudent]}
                             studyPrograms={this.state.studyPrograms}/>

         <AddStudent shown={this.state.showAddStudent}
                     add={this.addStudentItem}
                     studyPrograms={this.state.studyPrograms}/>

         <h2>Study Programs
             <button className={'btn'} onClick={this.showAddStudyProgramComponent}>Add</button>
         </h2>

         <StudyProgramList studyPrograms={this.state.studyPrograms}
                           editStudyProgram={this.showEditProgramComponent}
                           deleteStudyProgram={this.deleteStudyProgramById}/>

         <EditProgram shown={this.state.showEditProgram}
                      formSubmit={this.onFormSubmitStudyProgram}
                      studyProgram={this.state.studyPrograms[this.state.selectedProgram]}
                      />

         <AddStudyProgram shown={this.state.showAddProgram} add={this.addProgramItem}/>


     </div>

    );
  }
}

export default App;
