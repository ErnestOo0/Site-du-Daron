function getData(data){
    $.getJSON("http://localhost:8080/data/"+data+".json",function(fileData){
        console.log(fileData);
        for(let a of fileData){
            console.log(a["nom"]);
            $("#listeArt").append("<div class='col-sm-6 col-md-4 col-lg-3 border'><h3>"+a["nom"]+"</h3><h4>"+a["date"]+"</h4></div>")
        }
    });
}

//document.onload = getData();

