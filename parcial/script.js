/* variables con id's a usar en los selectores */
let alimento = '#alimento';
let calorias = '#calorias';
let grasas = '#grasas';
let proteinas = '#proteinas';
let carbo = '#carbo';
let ok = '#ok';
let ide = '#';
let valor = '';

function insertInput(elemento) {
    valor = $(elemento).html();
    $(elemento).html("<input id='"+elemento.slice(1)+"' type='text' value='"+valor+"'>")
}

function insertSelect(elemento) {
    valor = $(elemento).html();
    $(elemento).html("<select id='ok'><option value='bien'>bien</option><option value='mal'>malo</option></select>")
}

function insertEdicion(elemento) {
    valor = $(elemento).html();
    $(elemento+" a").html("<p style='color: #616161'>En edicion</p>")
}

function editar(id) {
    alimento = alimento+id;
    calorias = calorias+id;
    grasas = grasas+id;
    proteinas = proteinas+id;
    carbo = carbo+id;
    ok = ok+id;
    ide = ide+id;

    insertInput(alimento);
    insertInput(calorias);
    insertInput(grasas);
    insertInput(proteinas);
    insertInput(carbo);
    insertSelect(ok);
    insertEdicion(ide);

    $(".btn-aceptar").removeClass("d-none");
    $(".btn-cancelar").removeClass("d-none");
    $(".text").removeClass("d-none");
    $(".btn-aceptar").addClass("d-inline");
    $(".btn-cancelar").addClass("d-inline");
    $(".text").addClass("d-block");

    
}

function obtener(elemento) {
    valor = $(elemento).html();
}

function enviar() {
    htmlalimento = obtener(alimento);
    htmlcalorias = obtener(calorias);
    htmlgrasas = obtener(grasas);
    htmlproteinas = obtener(proteinas);
    htmlcarbo = obtener(carbo);
    htmlok = obtener(ok);
    let URLactual = window.location;
    $.get(URLactual, params, function(e){
        
    });
}