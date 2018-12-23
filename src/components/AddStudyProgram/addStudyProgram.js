import React, {Component} from 'react'

class AddStudyProgram extends Component{

    callSubmit = (formSubmitEvent) =>{

        formSubmitEvent.preventDefault();

        this.props.add({
            name: formSubmitEvent.target.studyProgramName.value,
        })
    };

    render(){

        if(!this.props.shown) return null;

        return(
            <form onSubmit={this.callSubmit}>
                <div className={"row"}>
                    <div className={"col-2"}>
                        <input type="text" name={"studyProgramName"} placeholder={"Name"}/>
                    </div>
                    <div className={"col-1"}>
                        <button type={"submit"} className={"btn btn-light"}>Add study program</button>
                    </div>
                </div>
            </form>
        );
    }
};
export default AddStudyProgram;