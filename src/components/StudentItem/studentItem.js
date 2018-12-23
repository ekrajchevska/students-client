import React, { Component } from 'react'
import './studentItem.css';

class StudentItem extends Component{

    constructor(props){
        super(props);
    }

    sendIndex = () =>{
        this.props.notifyClick(this.props.index);
    };

    deleteStudent = () =>{
        this.props.notifyDelete(this.props.student.index)
    };

    render(){
        return(
            <div>
                <li className={'row'}>
                    <div className={'col-2'}>{this.props.student.index}</div>
                    <div className={'col-2'}>{this.props.student.name}</div>
                    <div className={'col-2'}>{this.props.student.lastName}</div>
                    <div className={'col-2'}>{this.props.student.studyProgram}</div>
                    <div className={'col-2'}>
                        <button className={'btn btn-outline-info'} onClick={this.sendIndex}>Edit</button>
                        <button className={'btn btn-outline-danger'} onClick={this.deleteStudent}>Delete</button>
                    </div>
                </li>

            </div>
        );
    }
}
export default StudentItem;