const { field } = require("jexia-sdk-js/node"); 

function getTeachers(ds, username_teacher, password_teacher){

    const orders = ds.dataset("Teachers");

    const username = field("username_teacher").isEqualTo(username_teacher);  
    const password = field("password_teacher").isEqualTo(password_teacher);
    const getTeacher = username.and(password);

    const selectQuery = orders
    .select() //get all registers
    //.where(field => field("verified").isEqualTo(true))
    .where(getTeacher);

    selectQuery.subscribe(records => { 
        console.log("print ", records) //print response query
      }, 
      error => { 
        console.log(error);
    });
}

module.exports = {
    getTeachers: getTeachers 
}