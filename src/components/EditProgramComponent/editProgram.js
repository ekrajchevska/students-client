import React, {Component} from 'react'

class EditProgram extends Component{

    constructor(props){
        super(props);
    }

    callSubmit = (formSubmitEvent) =>{

        formSubmitEvent.preventDefault();
        if(formSubmitEvent.target.studyProgramName.value==="")
            return;

        this.props.formSubmit(
            {
                id: this.props.studyProgram.id,
                name: formSubmitEvent.target.studyProgramName.value
            }
        );
    };

    render(){

        if(!this.props.shown) return null;

        return(
            <div>
                <form onSubmit={this.callSubmit} key={this.props.studyProgram.id}>
                    <div className={"row"}>

                        <div className={"col-2"}>
                            <input type="text"
                                   name={"studyProgramName"}
                                   defaultValue={this.props.studyProgram.name}
                            />
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
export default EditProgram;