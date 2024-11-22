let items = [["Home","http://localhost:8080"],["Articles","http://localhost:8080/file/articles/articles.html"],["Cours","#"],["Liens externs","#"]];

function makeNav(id,active){// items -> tableau de [item,lien]
    $("#"+id).empty;
    html = "";
    for(i of items){
        LinkClass = "nav-link";
        if(i[0]==active){
            LinkClass+=" active";
        }
        html += '<li class="nav-item"><a class="'+LinkClass+'" href="'+i[1]+'">'+i[0]+'</a></li>';
    }

    $("#"+id).append(html);
}