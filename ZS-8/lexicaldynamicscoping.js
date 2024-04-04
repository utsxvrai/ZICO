var teacher = "Sanket"; // teacher -> global context -> Saket
function ask(question){ // question -> local context -> question
    console.log(teacher,  question) // teacher -> global context -> Saket
}

function fun(){
    var teacher = "Pulkit"; // teacher -> fun context -> Pulkit
    ask("Why?"); // question -> global context -> Why?
}
fun(); // fun context -> fun