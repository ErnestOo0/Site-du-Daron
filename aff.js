function getData(){
    document.getElementById("truc").getJSON("http://localhost:8080/data/articles.json",function(fileData){
        console.log(fileData);
    });
}

document.onload = getData();

