async function manageData( method, myData){
    let response ;
    const url = "http://localhost:3000/movies/";
    switch(method){
        case 'POST':
            await postData (url, myData);
            break;

        case 'GET':
            response = await getTable();
            break;

        case 'PUT':
            await putData (url, myData);
            break;

        case 'DELETE':
            await deleteData(url, myData);
            break;

        default:
          console.log( "No such method." );       
    }
    return await response;
}


async function postData (url, myData) {
    
    var myJSON = JSON.stringify(myData);
    let res = await fetch(url, 
    {
        headers: {'Content-Type': 'application/json'}, 
        credentials: "same-origin", 
        method: "POST", 
        body:myJSON
    });
    
    var response = await res.json();
    return response;
}

async function getTable(){
    const res = await fetch("http://localhost:3000/movies/");
    const movieList = await res.json();
    return movieList;
}

async function putData (url, myData) {
    let id = myData.id;
    var myJSON = JSON.stringify(myData);
    let res = await fetch(url+id, 
    {
        headers: {'Content-Type': 'application/json'}, 
        method: "PUT", 
        body:myJSON
    });
    
    var response = await res.json();
    return response;
}

async function deleteData (url, id) {
    let res = await fetch(url+id, 
    {
        method: "DELETE"
    });
    
    var response = await res.json();
    return response;
}