function bowtieAlphabet(string) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];

    const result = string
        .split('')
        .map((caracter) => {
            if (vocals.includes(caracter.toLowerCase())) {
                return caracter.toLowerCase() + 'f' + caracter.toLowerCase();
            } else {
                return caracter;
            }
        })
        .join('');

    return result;
}

const inputString = 'marco';
const result = bowtieAlphabet(inputString);
console.log(result); // Output: mafarcofo

document.body.innerHTML = `<p>Risultato: ${risultato}</p>`;