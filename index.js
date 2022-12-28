function show(){
    let a = document.getElementById("nav-items1")
    if(a.className == "nav-items"){
        a.className += " show-menue"
    }
    else{
        a.className = "nav-items"
    }
}