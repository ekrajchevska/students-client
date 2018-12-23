import React, { Component } from 'react'

class StudyProgramItem extends Component{

    constructor(props){
        super(props);
    }

    sendId = () =>{
        this.props.notifyEdit(this.props.index)
    };

    deleteId = () =>{
        this.props.notifyDelete(this.props.studyProgram.id);
    }

    render(){
        return(
            <div>
                <li className={'row'}>
                    <div className={'col-2'}>{this.props.studyProgram.name}</div>
                    <div className={'col-2'}>
                        <button className={'btn btn-outline-info'} onClick={this.sendId}>Edit</button>
                        <button className={'btn btn-outline-danger'} onClick={this.deleteId}>Delete</button>
                    </div>
                </li>

            </div>
        );
    }
}
export default StudyProgramItem;