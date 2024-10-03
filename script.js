document.addEventListener("DOMContentLoaded", () => {
    let unidade = ["a.a.", "ano"];
    let capIni = document.getElementById("capitalInicial");
    let capIniDis = document.getElementById("capIniDis");
    let juros = document.getElementById("juros");
    let jurosDis = document.getElementById("jurosDis");
    let tempo = document.getElementById("tempo");
    let tempoDis = document.getElementById("tempoDis");
    let uniMes = document.getElementById("inlineRadio1");
    let uniAno = document.getElementById("inlineRadio2");
    let res = document.getElementById("result");
    
    uniMes.addEventListener("input", () => {
        getValues();
    });
    uniAno.addEventListener("input", () => {
        getValues();
    });
    capIni.addEventListener("input", () => {
        getValues();
    });
    juros.addEventListener("input", () => {
        getValues();
    });
    tempo.addEventListener("input", () => {
        getValues();
    });
    
    function getValues(){    
        if (uniMes.checked){
            if (tempo.value < 2){
                unidade[0] = "a.m.";
                unidade[1] = "mês"; 
            } else {
                unidade[0] = "a.m.";
                unidade[1] = "meses";
            }
        } else if (uniAno.checked){
            if (tempo.value < 2){
                unidade[0] = "a.a.";
                unidade[1] = "ano";
            } else {
                unidade[0] = "a.a.";
                unidade[1] = "anos";
            }
        }
        
        capIniDis.innerText = `R$${capIni.value}`;
        jurosDis.innerText = `${juros.value}% ${unidade[0]}`;
        tempoDis.innerText = `${tempo.value} ${unidade[1]}`;
        calc();
    }
    
    function calc(){
        let montante = (capIni.value * ((1 + juros.value / 100) ** tempo.value)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        res.innerText = `R$${montante}`;
    }
    
    getValues();
});