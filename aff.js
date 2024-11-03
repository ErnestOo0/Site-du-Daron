const ZOOM = 2;

function goToLink(link){
    console.log("redirection vers "+link);
    window.location.href = link;
}

function goToLinkNewTab(link){
    console.log("ouverture dan sun nouvel onglet de "+link);
    window.open(link,"_blank");
}

function zoom(idBox){
    $("#"+idBox).css("height",($("#"+idBox).css("height") * ZOOM));
    $("#"+idBox).css("width",($("#"+idBox).css("width") * ZOOM));
    
    // console.log("-----------------");
    console.log($("#"+idBox).css("height")+" x "+$("#"+idBox).css("height"));
}

function dezoom(idBox){
    $("#"+idBox).css("height",$("#"+idBox).css("height") * (1/ZOOM));
    $("#"+idBox).css("width",$("#"+idBox).css("width") * (1/ZOOM));
    
    console.log($("#"+idBox).css("height")+" x "+$("#"+idBox).css("height"));
    // console.log("-----------------");
}

function survolIn(idBox){
    console.log("in "+ idBox);
    document.getElementById(idBox).style.boxShadow = "10px 5px 5px rgb(82, 82, 82)";
    //document.getElementById(idBox).style.zoom = "1.1";
    
    zoom(idBox)
    
    console.log($("#"+idBox).css("height")+" x "+$("#"+idBox).css("height"));
}

function survolOut(idBox){
    console.log("out "+idBox);
    console.log("-----------------");

    document.getElementById(idBox).style.boxShadow = "0px 0px 0px white";
    //document.getElementById(idBox).style.zoom = "1";
    dezoom(idBox)
}

function square(idBox){
    console.log("resizing de la window : "+window.innerHeight+" x "+window.innerWidth)
    $("#"+idBox).css("height",$("#"+idBox).css("width"));
    console.log($("#"+idBox).css("height")+" x "+$("#"+idBox).css("height"));
}

function getData(data){
    $.getJSON("http://localhost:8080/data/"+data+".json",function(fileData){
        //console.log(fileData);
        let num = 0;
        let nomId = "art";
        $("#listeArt").empty();
        for(let a of fileData){
            //console.log(a["nom"]);
            console.log(nomId+num);
            
            $("#listeArt").append("<div class='col-sm-6 col-md-4 col-lg-3 px-1 py-1'><div class='box' id='"+nomId+num+"' onmouseover='survolIn(\""+nomId+num+"\")' onmouseout='survolOut(\""+nomId+num+"\")' onclick='goToLinkNewTab(\""+a["link"]+"\")' style='background-image:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(\""+a["image"]+"\")'><h3>"+a["nom"]+"</h3><h4>"+a["revue"]+"</div></div>");
            
            square(nomId+num);

            num += 1;
        }
    });
}

$(window).resize(function(){
    allBox = document.querySelectorAll("div.box");
    
    for(a of allBox){
        square(a.id);
    }
    
});
//window.onresize = console.log("resizing de la window");