//Menu lateral
var menu_on = false;
let menu = document.getElementById("nav");
function showHideMenu(){
    if(menu_on==false){//si esta oculto
        menu.style.display = "block";
        menu_on = true;
    }
    else{
        menu.style.display = "none";
        menu_on = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_on = false;
    }
}
