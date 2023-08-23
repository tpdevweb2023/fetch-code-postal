const inputCodePostal = document.getElementById("code_postal")
const select = document.getElementById("ville")

inputCodePostal.addEventListener("input", function (){
    if(inputCodePostal.value.length === 5){
        let url = 'https://geo.api.gouv.fr/communes?codePostal=' + inputCodePostal.value;
        fetch(url)
            .then((response) => response.json())
            .then(data =>  {
                console.table(data)
                select.innerHTML = ""
                data.forEach((ville) => {
                    select.innerHTML += `<option>${ville.nom}</option>`
                })
            })
    }
})



