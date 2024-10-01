let capIni = document.getElementById("capitalInicial");
let capIniDis = document.getElementById("capIniDis");
let juros = document.getElementById("juros");
let jurosDis = document.getElementById("jurosDis");
let tempo = document.getElementById("tempo");
let tempoDis = document.getElementById("tempoDis");
let res = document.getElementById("resultado");

capIni.addEventListener("input", () => {
    getValues();
})
juros.addEventListener("input", () => {
    getValues();
})
tempo.addEventListener("input", () => {
    getValues();
})

function getValues(){
    capIniDis.innerText = `R$${capIni.value}`;
    jurosDis.innerText = `${juros.value}%`;
    tempoDis.innerText = `${tempo.value} anos`;
    calc();

}

function calc(){
    let montante = (capIni.value * ((1 + juros.value / 100) ** tempo.value)).toFixed(2).replaceAll(".", ",");
    res.innerText = `R$${montante}`;
}