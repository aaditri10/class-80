//collect from inputs
//length
//transfer to display-array
//remove commas
//sort
var names_of_students = [];

function submit() {
    var display_array = [];
    for(i=1; i <= 4; i++) {
    var array_nameofstudents = document.getElementById("name_of_the_student_"+i).value;
    names_of_students.push(array_nameofstudents);
    console.log(names_of_students);
}
var length_of_array = names_of_students.length;
console.log(length_of_array);
for (k=0; k < length_of_array; k++) {
    display_array.push("<h1>Name: "+names_of_students[k]+"</h1>");
    console.log(display_array);
}
document.getElementById("display_name_with_commas").innerHTML = display_array;
var removed_commas = display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML = removed_commas;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
//sort
//get length
//for loop to transfer
//display without commas
function sorting() {
var sorted_array = [];
names_of_students.sort();
console.log(names_of_students);
var length_of_array = names_of_students.length;
for (k=0; k < length_of_array; k++) {
    sorted_array.push("<h1>Name: "+names_of_students[k]+ "</h1>");
    console.log(sorted_array);
var array_without_commas = sorted_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML = array_without_commas;
}
}


