export const url = "http://localhost:8080/api/study_programs";

export const listStudyPrograms = () =>{
    return fetch(url, {
        "method" : "GET",
        headers:{
            "Content-Type" : "application/json"
        }
    });
};

export const addStudyProgram = (studyProgram) =>{
    console.log("-- studyProgram repository call add --");
    return fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name : studyProgram.name
        })
    })
};

export const deleteStudyProgram = (index, name)=>{
    console.log("-- studyProgram repository call delete: "+index+" --");
    return fetch(url+"/"+index,{
        method:"DELETE",
        headers: {
            "Content-Type":"application/json"
        }

    })
};

export const modifyStudyProgram = (studyProgram) =>{
    console.log("-- studyProgram repository call modify: "+studyProgram.id+" --")
    return fetch(url+"/"+studyProgram.id, {
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name : studyProgram.name
        })
    })
};