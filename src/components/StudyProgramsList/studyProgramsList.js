import React, { Component } from 'react'
import StudyProgramItem from "../StudyProgramItem/studyProgramItem";

class StudyProgramList extends Component{

    constructor(props) {
        super(props);
    }


    render(){
        let listItems = this.props.studyPrograms.map((element,index)=>{
            return <StudyProgramItem studyProgram={element}
                                key={index}
                                index={index}
                                     notifyEdit={this.props.editStudyProgram}
                                     notifyDelete={this.props.deleteStudyProgram}
                                />
        });


        return(
            <div>
                <ul className='list-group'>
                    {listItems}
                </ul>
            </div>

        );
    }
}
export default StudyProgramList;