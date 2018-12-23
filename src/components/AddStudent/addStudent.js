import React, {Component} from 'react'

class AddStudent extends Component{

    callSubmit = (formSubmitEvent) =>{

        formSubmitEvent.preventDefault();

        this.props.add({
            index: formSubmitEvent.target.studentIndex.value,
            name: formSubmitEvent.target.studentName.value,
            lastName: formSubmitEvent.target.studentSurname.value,
            studyProgram: formSubmitEvent.target.studentStudies.value
        })
    };

    render(){

        if(!this.props.shown) return null;

        let studyProgramOptions = this.props.studyPrograms.map((element,index)=>{
            return <option key={element.id}
                           value={element.name}>{element.name}</option>;
        });

        return(
            <form onSubmit={this.callSubmit}>
                <div className={"row"}>
                    <div className={"col-2"}>
                        <input type="text" name={"studentName"} placeholder={"Name"}/>
                    </div>

                    <div className={"col-2"}>
                        <input type="text" name={"studentSurname"} placeholder={"Surname"}/>
                    </div>

                    <div className={"col-2"}>
                        <input type="text" name={"studentIndex"} placeholder={"Index"}/>
                    </div>

                    <div className={"col-2"}>
                        <select name={"studentStudies"}>
                            {studyProgramOptions}
                        </select>
                    </div>

                    <div className={"col-1"}>
                        <button type={"submit"} className={"btn btn-light"}>Add student</button>
                    </div>
                </div>
            </form>
        );
    }
};
export default AddStudent;