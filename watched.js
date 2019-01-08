window.onload = ()=> {
    createTable();     
}

async function getTable(){
    const res = await fetch("http://localhost:3000/movies/");
    const movieList = await res.json();
    return movieList;
}

async function createTable(){
    let movieList = getTable();
    for(let i in movieList){
        //create row for every entry with movieList[i].seen === "YES"
    }

}

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