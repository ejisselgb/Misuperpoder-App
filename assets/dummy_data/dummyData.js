var student_data = [{
    "type_identification_student":"TI",
    "identification_student":"9988775511",
    "name_student":"Super4",
    "last_name_student":"Programmer4",
    "username_student":"super4.programmer",
    "email_student": "programmer4@gmail.com",
    "password_student": "12345678",
    "grade_student": 3,
    "points": 0
}];

var teacher_data = [{
    "type_identificaton_teacher": "CC",
    "identification_teacher": "1122343599",
    "name_teacher": "Test",
    "last_name_teacher": "Test",
    "username_teacher": "test1",
    "password_teacher": "12345678",
    "email_teacher": "test1@gmail.com",
    "phone_teacher": 3187381607,
    "grade_teach": 3
}];

var classroom_data = [{
    "name_classroom": "Classroom Test",
    "description":"This is my first classroom"
}];

var class_data = [{
    "id_teacher": "66feb0f4-a963-4d0c-8736-d089ddd3842d",
    "id_classroom":"c5ae657c-8f17-443e-ac2c-28170448673d"
}];


var levels_data = [{
    "name_level": "Fundaments I",
    "description_level":"Variables, Functions, Arrays, Loops"
}];

var challenges_data = [{
    "name_challenge": "Variables",
    "description_challenge": "Learn about variables",
    "id_level": "12dd2c0a-0be1-4fa9-b8cc-2de11b4a64dc"
}];

var progress_data = [{
    "point_to_challenge": 0,
    "id_student": "7f04962f-85af-4586-8c41-9db589dfa582",
    "id_challenges": "1f622abd-ed8c-4fa7-b331-46998c893be0"
}];

module.exports = {
    student_data: student_data,
    teacher_data: teacher_data,
    classroom_data: classroom_data,
    class_data: class_data,
    levels_data: levels_data,
    challenges_data: challenges_data,
    progress_data: progress_data
}