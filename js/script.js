

// CATEGORIAS

let cereais = [];
let leguminosas = [];
let frutasLegumes = [];
let laticinios = [];
let carnes = [];
let bebidas = [];
let higieneLimpeza = [];
let outros = [];


let nomeProd = "";
let categoria = "";


function add() {

    nomeProd = document.querySelector("#nomeProd").value;
    categoria = document.querySelector("#categoria").value;


    switch (categoria) {

        case "cereais":

            cereais.push(nomeProd);

            renderCereais();

            break;

        case "leguminosas":

            leguminosas.push(nomeProd);
            renderLeguminosas();

            break;

        case "frutasLegumes":

            frutasLegumes.push(nomeProd);
            renderFrutasLegumes();

            break;

        case "laticinios":

            laticinios.push(nomeProd);
            renderLaticinios();

            break;

        case "carnes":

            carnes.push(nomeProd);
            renderCarnes();

            break;

        case "bebidas":

            bebidas.push(nomeProd);
            renderBebidas();

            break;

        case "higieneLimpeza":

            higieneLimpeza.push(nomeProd);
            renderHigieneLimpeza();

            break;

        case "outros":

            outros.push(nomeProd);
            renderOutros();

            break;

        default:

            alert(`Categoria inválida! O produto ${nomeProd} não foi adicionado à lista.`);

            break;

    }


    mostrarLista();


}


// EXIBE OU NÃO A CATEGORIA DOS PRODUTOS CONFORME PRESENÇA OU NÃO DOS MESMOS (LISTA VAZIA - CATEGORIA OCULTA)

function mostrarLista() {

    let categoriaCereais = document.querySelector(".categoria-cereais");
    let categoriaLeguminosas = document.querySelector(".categoria-leguminosas");
    let categoriaFrutasLegumes = document.querySelector(".categoria-frutasLegumes");
    let categoriaLaticinios = document.querySelector(".categoria-laticinios");
    let categoriaCarnes = document.querySelector(".categoria-carnes");
    let categoriaBebidas = document.querySelector(".categoria-bebidas");
    let categoriaHigieneLimpeza = document.querySelector(".categoria-higieneLimpeza");
    let categoriaOutros = document.querySelector(".categoria-outros");

    if (cereais.length > 0) {

        categoriaCereais.classList.add("displayBlock");

    } else {

        categoriaCereais.classList.remove("displayBlock");

    }


    if (leguminosas.length > 0) {

        categoriaLeguminosas.classList.add("displayBlock");

    } else {

        categoriaLeguminosas.classList.remove("displayBlock");

    }



    if (frutasLegumes.length > 0) {

        categoriaFrutasLegumes.classList.add("displayBlock");

    } else {

        categoriaFrutasLegumes.classList.remove("displayBlock");

    }



    if (laticinios.length > 0) {

        categoriaLaticinios.classList.add("displayBlock");

    } else {

        categoriaLaticinios.classList.remove("displayBlock");

    }



    if (carnes.length > 0) {

        categoriaCarnes.classList.add("displayBlock");

    } else {

        categoriaCarnes.classList.remove("displayBlock");

    }


    if (bebidas.length > 0) {

        categoriaBebidas.classList.add("displayBlock");

    } else {

        categoriaBebidas.classList.remove("displayBlock");

    }


    if (higieneLimpeza.length > 0) {

        categoriaHigieneLimpeza.classList.add("displayBlock");

    } else {

        categoriaHigieneLimpeza.classList.remove("displayBlock");

    }



    if (outros.length > 0) {

        categoriaOutros.classList.add("displayBlock");

    } else {

        categoriaOutros.classList.remove("displayBlock");

    }




}




// MOSTRA AS INSERÇÕES/ALTERAÇÕES DOS PRODUTOS NA TELA
function renderCereais() {
    let ul = document.querySelector("#cereais");
    ul.innerHTML = null;

    cereais.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};


function renderLeguminosas() {
    let ul = document.querySelector("#leguminosas");
    ul.innerHTML = null;

    leguminosas.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};


function renderFrutasLegumes() {
    let ul = document.querySelector("#frutasLegumes");
    ul.innerHTML = null;

    frutasLegumes.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};


function renderLaticinios() {
    let ul = document.querySelector("#laticinios");
    ul.innerHTML = null;

    laticinios.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};

function renderCarnes() {
    let ul = document.querySelector("#carnes");
    ul.innerHTML = null;

    carnes.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};


function renderBebidas() {
    let ul = document.querySelector("#bebidas");
    ul.innerHTML = null;

    bebidas.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};


function renderHigieneLimpeza() {
    let ul = document.querySelector("#higieneLimpeza");
    ul.innerHTML = null;

    higieneLimpeza.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};



function renderOutros() {
    let ul = document.querySelector("#outros");
    ul.innerHTML = null;

    outros.forEach(function (nomeProd) {

        let li = document.createElement("li");
        li.innerHTML = nomeProd;
        ul.appendChild(li);

    })

};




// CONTINUAR

function remove() {



    if (cereais.length === 0 && leguminosas.length === 0 && frutasLegumes.length === 0 && laticinios.length === 0 && carnes.length === 0 && bebidas.length === 0 && higieneLimpeza.length === 0 && outros.length === 0) {

        alert(`A lista está vazia!`);

    } else {


        nomeProd = document.querySelector("#nomeProd").value;
        categoria = document.querySelector("#categoria").value;

        if (categoria == "cereais" && cereais.indexOf(nomeProd) != -1) {

            cereais.splice(cereais.indexOf(nomeProd), 1);

            mostrarLista();
            renderCereais();


        } else if (categoria == "leguminosas" && leguminosas.indexOf(nomeProd) != -1) {

            leguminosas.splice(leguminosas.indexOf(nomeProd), 1);

            mostrarLista();
            renderLeguminosas();


        } else if (categoria == "frutasLegumes" && frutasLegumes.indexOf(nomeProd) != -1) {

            frutasLegumes.splice(frutasLegumes.indexOf(nomeProd), 1);

            mostrarLista();
            renderFrutasLegumes();


        } else if (categoria == "laticinios" && laticinios.indexOf(nomeProd) != -1) {

            laticinios.splice(laticinios.indexOf(nomeProd), 1);

            mostrarLista();
            renderLaticinios();



        } else if (categoria == "carnes" && carnes.indexOf(nomeProd) != -1) {

            carnes.splice(carnes.indexOf(nomeProd), 1);

            mostrarLista();
            renderCarnes();

        } else if (categoria == "bebidas" && bebidas.indexOf(nomeProd) != -1) {

            bebidas.splice(bebidas.indexOf(nomeProd), 1);

            mostrarLista();
            renderBebidas();


        } else if (categoria == "higieneLimpeza" && higieneLimpeza.indexOf(nomeProd) != -1) {

            higieneLimpeza.splice(higieneLimpeza.indexOf(nomeProd), 1);

            mostrarLista();
            renderHigieneLimpeza();

        }   else if (categoria == "outros" && outros.indexOf(nomeProd) != -1) {

                outros.splice(outros.indexOf(nomeProd), 1);
    
                mostrarLista();
                renderOutros();


        } else {

            alert(`Não foi possível encontrar o item dentro da lista!\n\nVerifique se o nome do produto e categoria foram selecionados corretamente!`);

        }

    }





}

