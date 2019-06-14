/*
 *Uses person's name to get their json object data
 *After data, matches to see if requirements were met
 */
/*
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let i;

function getRequirements() {
    firstName = document.getElementById('firstName');
    lastName = document.getElementById('lastName');
    $.getJSON("Students.json", function(json) {
        //console.log(json);
        //console.log(json.Sheet1[0].LAST);
        for (i = 0; i < json.Sheet1.length; i++) {
            let student = json.Sheet1[i];
            console.log(student);
            if (student.LAST == lastName && student.FIRST == firstName) {
                
                console.log(student);
                $.getJSON("Courses.json", function(json) {
                    console.log(`First Name = ${student.FIRST}`);
                    console.log(`Last Name = ${student.LAST}`);
                });
            }
        }
    });
}

$(document).ready(function() {



    
    //getRequirements();
});
*/

