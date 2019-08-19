import React, {Component} from 'react'

class EditStudentDetails extends Component{

    callSubmit = (formSubmitEvent) =>{

        formSubmitEvent.preventDefault();
        if(formSubmitEvent.target.studentName.value==="" ||
            formSubmitEvent.target.studentSurname.value ===""){

            alert("Missing information!");
            return;
        }

        this.props.formSubmit(
            {
                name: formSubmitEvent.target.studentName.value,
                lastName: formSubmitEvent.target.studentSurname.value,
                index: this.props.student.index,
                studyProgram: formSubmitEvent.target.studentStudies.value
            }
        );
    };

    render(){

        if(!this.props.shown) return null;

        let studyProgramOptions = this.props.studyPrograms.map((element,index)=>{
            return <option key={element.id}
                           value={element.name}>{element.name}</option>;
        });

        return(
            <div>
                <form onSubmit={this.callSubmit} key={this.props.student.index}>
                    <div className={"row"}>
                        <div className={"col-2"}>
                            <input type="text"
                                   name={"studentName"}
                                   defaultValue={this.props.student.name}
                                   />
                        </div>

                        <div className={"col-2"}>
                            <input type="text"
                                   name={"studentSurname"}
                                   defaultValue={this.props.student.lastName}
                                   />
                        </div>

                        <div className={"col-1"}>
                            <select name={"studentStudies"} defaultValue={this.props.student.studyProgram}>
                                {studyProgramOptions}
                            </select>
                        </div>

                        <div className={"col-1"}>
                            <button className={'btn btn-success'} type={"submit"}>Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
export default EditStudentDetails;