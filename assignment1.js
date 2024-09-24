//Student 1
const student1FirstName = "Juan"; 
const student1MiddleName = "Gamoso";
const student1LastName = "Delacruz";
const student1Birthdate = "January 1, 2001";
const student1Birthplace = "Upper Bonifacio, Bagiuio City, Benguet, Philippines 2600";
const student1Address = "San Nicolas,Candon City, Ilocos Sur, Philippines 2710";
const student1course = "Bachelor of Science in Computer Science";
const student1DreamJob = "Software Engineer";

//Classmate 2
const student2FirstName = "Rod-jay";
const student2MiddleName = "Ramirez";
const student2LastName = "Teofilo";
const student2Birthdate = "February 23 2005";
const student2Birthplace = "Ubbog, Salcedo, Ilocos Sur";
const student2Address = "Balidbid, Salcedo, Ilocos Sur 2711";
const student2course = "Bachelor of Science in Computer Science";
const student2DreamJob = "Web Developer";

//Classmate 3
const student3FirstName = "Christian";
const student3MiddleName = "Ganapao";
const student3LastName = "De Vera";
const student3Birthdate = "December 6, 2005";
const student3Birthplace = "Salcedo, Ilocos Sur 2711";
const student3Address = "Arnap, Salcedo, Ilocos Sur";
const student3course = "Bachelor of Science in Computer Science";
const student3DreamJob = "Game Developer";

//Function that display student data
function displayStudentInfo(firsName, middleName, lastNAme, birthdate, birthplace, address, course, dreamJOb){
    const fullName = firstName.toUpperCase()+ "" + middleName.toUpperCase();
    const fullDetails = '[${fullName}] was born [${birthdate}] at [${birthplace}], and currently living at [${address}].'
                        '[${firstName.toLowerCase()}] ${middleName.toLowerCase()} ${lastName.toLowerCase()}] is taking up [${course}]' +
                        'and dreams to be [${dreamJob}] after graduation.';
    console.log(fullDetails);
}

//Display information of each student
displayStudentInfo(student1FirstName, student1MiddleName, student1LastName, student1Birthdate, student1Birthplace, student1Address, student1Course, student1DreamJob);
displayStudentInfo(student2FirstName, student2MiddleName, student2LastName, student2Birthdate, student2Birthplace, student2Address, student2Course, student2DreamJob);
displayStudentInfos(tudent3FirstName, student3MiddleName, student3LastName, student3Birthdate, student3Birthplace, student3Address, student3Course, student3DreamJob);