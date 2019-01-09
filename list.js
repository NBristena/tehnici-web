window.onload = ()=> {
    createTable();     
}

async function createTable(){
    let movieList = await manageData('GET','');
    let table=document.getElementById("table");
    
    //clear previous table if exists
    while (table.childNodes.length > 0)
    	table.removeChild(table.childNodes[0]);

    let tableHead = `<tr>   <th>Nr.</th>   <th>Title</th>  </tr>`;
    let tableRow = '';
    let index = 0;

    for(let i of movieList){
        
        if(table.title ==="watchlist"){
            if( i.seen === "NO"){
                index++;
                tableRow += `<tr>  <td>${index}</td>  <td>${i.title}</td>  <tr>`;
            }
        }else if(table.title === "watched"){
            if( i.seen === "YES"){
                index++;
                tableRow += `<tr>  <td>${index}</td>  <td>${i.title}</td>  <tr>`;
            }
        }
    }

    if(index){
        table.innerHTML = tableHead + tableRow;
    }
    else{
        document.getElementById("empty").style.display = "block";
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
async function submitEdit(id){
    let movieList = await manageData('GET','');
    let thisTitle = document.getElementById(id).value;
    
    if(id === "edit-seen"){
        var myData={
            id: 0,
            title: thisTitle,
            seen: "YES"
        };
    
        for(let i of movieList){
            if(i.seen === "NO" && i.title === thisTitle){
                myData.id = i.id;
                break;
            }
        }
    }else if(id === "edit-unseen"){
        var myData={
            id: 0,
            title: thisTitle,
            seen: "NO"
        };
    
        for(let i of movieList){
            if(i.seen === "YES" && i.title === thisTitle){
                myData.id = i.id;
                break;
            }
        }
    }
    
    await manageData('PUT',myData);
    location.reload();
}

function clickDelete(){
    if(document.getElementById("form-delete").style.display == "none"){
        document.getElementById("form-delete").style.display = "block"; 
    }else{
        document.getElementById("form-delete").style.display = "none";
    }
    return 0;
}
async function submitDelete(id){
    let movieList = await manageData('GET','');
    let thisTitle = document.getElementById(id).value;
    let movieId;

    for(let i of movieList){
        
        if(id ==="delete-watchlist"){
            if( i.seen === "NO" && i.title === thisTitle){
                movieId = i.id;
                break;
            }
        }else if(id === "delete-watched"){
            if( i.seen === "YES" && i.title === thisTitle){
                movieId = i.id;
                break;
            }
        }
    }
    await manageData('DELETE',movieId);
    location.reload();
}