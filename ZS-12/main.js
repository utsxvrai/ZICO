

function addHrefs(){
    var list = document.getElementsByTagName("li");
    console.log(list);

    for(let i = 0 ; i < list.length  ; i++){
        // craete the anchor tag
        var anchor  = document.createElement("a");
        anchor.setAttribute("href", "https://www.google.com/search?q="+list[i].innerHTML);
        anchor.innerHTML = list[i].innerHTML;
        list[i].innerHTML = "";
        console.log(anchor); 


        // adding into the li item
        list[i].append(anchor);
    }
}
function changeTheme(){
    // grab the body element
    var item = document.getElementById("list");
    console.log(item);

    item.setAttribute('class', 'dark')
}

addHrefs();