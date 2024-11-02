function goToLink(link){
    console.log("redirection vers "+link);
    window.location.href = link;
}

function goToLinkNewTab(link){
    console.log("ouverture dan sun nouvel onglet de "+link);
    window.open(link,"_blank");
}

function survolIn(idCard){
    console.log("in "+ idCard);
    //$("#"+idCard).color = "red";
    document.getElementById(idCard).style.boxShadow = "10px 5px 5px rgb(82, 82, 82)";
    document.getElementById(idCard).style.zoom = "1.1";
}

function survolOut(idCard){
    console.log("out "+idCard);
    //$("#"+idCard).color = "black";
    document.getElementById(idCard).style.boxShadow = "0px 0px 0px white";
    document.getElementById(idCard).style.zoom = "1";
}

function getData(data){
    $.getJSON("http://localhost:8080/data/"+data+".json",function(fileData){
        console.log(fileData);
        let num = 0;
        let nomId = "art"
        for(let a of fileData){
            console.log(a["nom"]);
            console.log(nomId+num);

            $("#listeArt").append("<div class='col-sm-6 col-md-4 col-lg-3 px-1 py-1'><div class='box' id='"+nomId+num+"' onmouseover='survolIn(\""+nomId+num+"\")' onmouseout='survolOut(\""+nomId+num+"\")' onclick='goToLinkNewTab(\""+a["link"]+"\")' style='background-image:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(\""+a["image"]+"\")'><h3>"+a["nom"]+"</h3><h4>"+a["revue"]+"</div></div>");

            num += 1;
        }
    });
}
