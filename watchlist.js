function clickEdit(){
    if(document.getElementById("form-edit").style.display == "none"){
        document.getElementById("form-edit").style.display = "block";
    }else{
        document.getElementById("form-edit").style.display = "none";
    }
    return 0;
}

function clickDelete(){
    if(document.getElementById("form-delete").style.display == "none"){
        document.getElementById("form-delete").style.display = "block"; 
    }else{
        document.getElementById("form-delete").style.display = "none";
    }
    return 0;
}
