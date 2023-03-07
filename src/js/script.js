const btn = document.querySelector('#btn');


btn.addEventListener('click', () => {
    let distance = document.querySelector('#distance').value;
    let combustion = document.querySelector('#combustion').value;
    let price = document.querySelector('#price').value;
    let passenger = document.querySelector('#passanger').value;
    let weight = document.querySelector('#weight').value;

    let addCombustion = weight * passenger * 0.6 / 100;

    let combustionPerKm = combustion / 100;

    let combustionPerDistance = combustionPerKm * distance;
    let finalCombustion = addCombustion + combustionPerDistance;
    let finalPrice = finalCombustion * price;

    if (distance == "" || combustion == "" || price == "" || passenger == "" || weight == "") {
        document.querySelector('.result').innerHTML = `Wprowadź wartości`;
    } else {
        document.querySelector('.result').innerHTML = `Koszt przejechania <span class="painter">${distance}km</span> wynosi <span class="painter">${finalPrice.toFixed(2)}zł</span>`;
    }
})