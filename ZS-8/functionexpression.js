var teacher = "Sanket";
function fun(){
    var teacher = "Pulkit";
    console.log(content); // error
    let content = "Js";
    if(content == "Js"){
        let hours = 10;
        console.log("Block", hours);
    }
    console.log("Function", content);
    console.log(teacher);
}
function gun(){
    var student = "Utsav";
    console.log(student);

}
 
fun();
gun();
console.log(teacher);
