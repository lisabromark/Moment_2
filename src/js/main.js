

let courses = [];

window.onload = () => {
    loadCourses();
}

async function loadCourses (){
    try {
const response = await fetch("https://webbutveckling.miun.se/files/ramschema_ht24.json");
if(!response.ok){
    throw new Error("Nu gick något fel vid anslutning till data!");
}
courses = await response.json();
printCourses(courses);

    } catch (error){
        console.error(error);
        document.querySelector("#error").innerHTML = "<p>Nu gick något fel vid anslutning till data!</p>";
    }
}

function printCourses(data){
const coursesEl = document.querySelector("#courses");
// Rensa DOM
coursesEl.innerHTML ="";

//Sortera kurser utifrån kursnamn

data.sort((a,b) => a.coursename > b.coursename ? 1: -1);
console.table(data);

courses.forEach(course=>
    coursesEl.innerHTML +=`
    <tr>
    <td>${course.code}</td>
    <td>${course.coursename}</td>
    <td>${course.progression}</td>
    </tr>`);
}