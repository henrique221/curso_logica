function formataNumeroDecimal(numero){

    var valor = numero.toFixed(2).replace(".",",");
    return valor;

}

function formataNumeroRecebido(valor){

    var valorRecebido = parseFloat(valor.replace(",",".").replace("o", "0"));
    var valorFormatado = parseFloat(valorRecebido.toFixed(2).replace(".",","));
    return valorFormatado;

};
function diferenca(preco1, preco2){

        var dif = (parseFloat(preco1) - parseFloat(preco2)).toFixed(2).replace(".",",");
        return dif;

};