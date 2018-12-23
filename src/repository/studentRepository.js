export const url = "http://localhost:8080/api/students";

export const listStudents = () =>{
   return fetch(url, {
           method : "GET",
       headers:{
           "Content-Type" : "application/json"
       }
   });
};

export const addStudent = (student) =>{
    console.log("student repo");
    console.log("index: "+student.index+" name: "+student.name+" lastName: "+
        student.lastName+" program: "+student.studyProgram);

    return fetch(url,{
        method:"POST",
        headers:{
        "Content-Type":"application/json"},
        body:JSON.stringify({
            index : student.index,
            name : student.name,
            lastName : student.lastName,
            studyProgram : student.studyProgram
        })
    })
};

export const deleteStudent = (index) =>{
    console.log("student repo delete index: "+index)
    return fetch(url+"/"+index,{
        method:"DELETE",
        headers: {
            "Content-Type":"application/json"
        }
    })
};

export const modifyStudent = (student) =>{
    return fetch(url+"/"+student.index,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            index : student.index,
            name : student.name,
            lastName : student.lastName,
            studyProgram : student.studyProgram
        })
    })
};
