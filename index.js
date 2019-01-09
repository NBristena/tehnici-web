function clickAddWatchlist(){
    if(document.getElementById("form-watchlist").style.display == "none"){
        document.getElementById("form-watchlist").style.display = "block"; 
    }else{
        document.getElementById("form-watchlist").style.display = "none";
    }
    return 0;
}
function clickAddWatched(){
    if(document.getElementById("form-watched").style.display == "none"){
        document.getElementById("form-watched").style.display = "block";
    }else{
        document.getElementById("form-watched").style.display = "none";
    }
    return 0;
}


function checkTitle(movieList,thisTitle){
    let exists = false;
    console.log("titlul introdus:" + thisTitle);
    for(let i of movieList){
        if(i.title === thisTitle){
            exists = true;
            break;
        }
    }
    if(exists === true){
        console.log("E deja in lista:");
        return 0;
    }
    else{
        console.log("Adaugam!");
        return 1;
    }
}

async function submitTitle(isSeen, id){
    let movieList = await manageData('GET','');
    let thisTitle = document.getElementById(id).value;

    if(thisTitle.match(/[a-z0-9]/i)){
        if(checkTitle(movieList,thisTitle)){
            console.log(movieList.length + 1);
            var myData={
                id: movieList.length + 1,
                title: thisTitle,
                seen: isSeen
            };
            await manageData("POST",myData);
        }
    }
   if(isSeen.match(/NO/)){
        location.assign("watchlist.html");
    }
    else{
        location.assign("watched.html");
    }
}



