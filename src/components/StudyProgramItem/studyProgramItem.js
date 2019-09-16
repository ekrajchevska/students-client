import React, { Component } from 'react'

class StudyProgramItem extends Component{

    sendId = () =>{
        this.props.notifyEdit(this.props.index)
    };

    deleteSp = () =>{
        this.props.notifyDelete(this.props.studyProgram.id, this.props.studyProgram.name);
    };

    render(){
        return(
            <div className={'container-fluid'}>
                <li className={'row'}>
                    <div className={'col-sm-1'}>{this.props.studyProgram.name}</div>
                    <div className={'col-sm-2'}>
                        <button className={'btn btn-info'} onClick={this.sendId}>Edit</button>
                        <button className={'btn btn-danger'} onClick={this.deleteSp}>Delete</button>
                    </div>
                </li>
            </div>
        );
    }
}
export default StudyProgramItem;