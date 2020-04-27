const { field } = require("jexia-sdk-js/node"); 


function createStudents(ds){

    let student_data = [{
        "type_identification_student":"TI",
        "identification_student":"9988775566",
        "name_student":"Super",
        "last_name_student":"Programmer",
        "username_student":"super.programmer",
        "email_student": "programmer@gmail.com",
        "password_student": "12345678",
        "grade_student": 3,
        "points": 0
    }];

    //create students
    const students = ds.dataset("Students");
    const insertQuery = students.insert(student_data);  
    insertQuery.subscribe(records => { 
        console.log("Record Insert ", records);
        }, 
        error => { 
        console.log(error);
    });
}

module.exports = {
    createStudents: createStudents 
}