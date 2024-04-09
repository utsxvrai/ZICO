var form = document.getElementById("form");

console.log(form);

form.addEventListener("submit", eventHandler)

function eventHandler(e){
    e.preventDefault();
    // validation
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value; 
    var password = document.getElementById("pass").value;
    if(password.length < 8){
        alert("Password should be atleast 8 characters long");
        return;
    }
    
}

