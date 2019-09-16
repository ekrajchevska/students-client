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
                <div className={'container-fluid'}>
                <div className={"row"}>
                    <div className={"col-sm-2"}>
                        <input type="text" name={"studentName"} placeholder={"Name"}/>
                    </div>

                    <div className={"col-sm-2"}>
                        <input type="text" name={"studentSurname"} placeholder={"Surname"}/>
                    </div>

                    <div className={"col-sm-2"}>
                        <input type="text" name={"studentIndex"} placeholder={"Index"}/>
                    </div>

                    <div className={"col-sm-1"}>
                        <select id={"programsOptions"} name={"studentStudies"}>
                            {studyProgramOptions}
                        </select>
                    </div>

                    <div className={"col-sm-1"}>
                        <button id={"studentSubmit"} type={"submit"} className={"btn btn-success"}>Add student</button>
                    </div>
                </div>
                </div>
            </form>
        );
    }
};
export default AddStudent;