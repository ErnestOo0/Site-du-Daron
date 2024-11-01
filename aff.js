function goToLink(link){
    console.log("redirection vers "+link);
    window.location.href = link;
}

function goToLinkNewTab(link){
    console.log("ouverture dan sun nouvel onglet de "+link);
    window.open(link,"_blank");
}

function getData(data){
    $.getJSON("http://localhost:8080/data/"+data+".json",function(fileData){
        console.log(fileData);
        for(let a of fileData){
            console.log(a["nom"]);
            let link = "https://www.ixocollections.com/img/cms/Porsche%20edito%2026/PORSCHE-Carrera-GT--DP-3-.jpg";

            $("#listeArt").append("<div class='col-sm-6 col-md-4 col-lg-3 px-1 py-1'><div class='card' onclick='goToLinkNewTab(\""+a["link"]+"\")'><div class='bg' style='background-image:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(\""+a["image"]+"\")'><h3>"+a["nom"]+"</h3><h4>"+a["revue"]+"</div></div></div>");
        }
    });
}
