function clickAddWatched(){
    if(document.getElementById("input-watched").style.display == "none"){
        document.getElementById("input-watched").style.display = "block";
    }else{
        document.getElementById("input-watched").style.display = "none";
    }
    if(document.getElementById("submit-watched").style.display == "none"){
        document.getElementById("submit-watched").style.display = "block";
    }else{
        document.getElementById("submit-watched").style.display = "none";
    }
    return 0;
}

function clickAddWatchlist(){
    if(document.getElementById("input-watchlist").style.display == "none"){
        document.getElementById("input-watchlist").style.display = "block"; 
    }else{
        document.getElementById("input-watchlist").style.display = "none";
    }
    if(document.getElementById("submit-watchlist").style.display == "none"){
        document.getElementById("submit-watchlist").style.display = "block"; 
    }else{
        document.getElementById("submit-watchlist").style.display = "none";
    }
    return 0;
}

async function getMovies(){
    var URL = "http://localhost:3000/movies/";
    const res = await fetch(URL);
    const json = await res.json();
    console.log( json);
    return json;
}

function checkTitle(movieList,thisTitle){
    let id,title,seen;
    let exists = false;
    console.log("titlul introdus:" + thisTitle);
    for(let i of movieList){
        if(i.title === thisTitle){
            exists = true;
            id = i.id;
            title = i.title;
            seen = i.seen;
            break;
        }
    }
    if(exists === true){
        console.log("E deja in lista:");
        console.log("id: "+id);
        console.log("title: "+title);
        console.log("seen? "+seen);

    }
    else{
        console.log("Adaugam!");
    }
}

async function submitWatchlist(){
    let movieList = await getMovies();
    let thisTitle = document.getElementById("input-watchlist").value;

    if(thisTitle.match(/[a-z0-9]/i)){
        checkTitle(movieList,thisTitle);
    }
    window.location.assign("watchlist.html");
    
}

async function submitWatched(){
    let movieList = await getMovies();
    let thisTitle = document.getElementById("input-watched").value;

    if(thisTitle.match(/[a-z0-9]/i)){
        checkTitle(movieList,thisTitle);
    }
    window.location.assign("watched.html");
    
}


