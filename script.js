

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);
//section devi
document.querySelector("#quantite").addEventListener("change", atualizarPrix)
document.querySelector("#js").addEventListener("change", atualizarPrix)
document.querySelector("#layout-sim").addEventListener("change", atualizarPrix)
document.querySelector("#layout-nao").addEventListener("change", atualizarPrix)
document.querySelector("#date-limite").addEventListener("change", function () {
    const dateFinal = document.querySelector("#date-limite").value
    document.querySelector("label[for=date-limite]").innerHTML = `Livrer ${dateFinal} semaine`
    atualizarPrix()
})


function atualizarPrix(){
    const qtde = document.querySelector("#quantite").value
    const avecJS =document.querySelector("#js").checked
    const includleyout = document.querySelector("#layout-sim").checked 
    const dateFinal = document.querySelector("#date-limite").value
    
    let prix = qtde * 100;
    if (avecJS) prix *= 1.1
    if (includleyout) prix += 500
    let tauxPointe = 1 - dateFinal*0.1; 
    prix *= 1 + tauxPointe
    
    document.querySelector("#prix").innerHTML = `€ ${prix.toFixed(2)}`

}