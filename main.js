function alfabetoFarfallino(string) {
    const vocali = ['a', 'e', 'i', 'o', 'u'];

    const result = string
        .split('')
        .map((caracter) => {
            if (vocali.includes(caracter.toLowerCase())) {
                return caracter.toLowerCase() + 'f' + caracter.toLowerCase();
            } else {
                return caracter;
            }
        })
        .join('');

    return result;
}

const inputString = 'marco';
const result = alfabetoFarfallino(inputString);
console.log(result); // Output: mafarcofo

document.body.innerHTML = `<p>Risultato: ${risultato}</p>`;