function alfabetoFarfallino(stringa) {
    const vocali = ['a', 'e', 'i', 'o', 'u'];

    const result = stringa
        .split('')
        .map((carattere) => {
            if (vocali.includes(carattere.toLowerCase())) {
                return carattere.toLowerCase() + 'f' + carattere.toLowerCase();
            } else {
                return carattere;
            }
        })
        .join('');

    return result;
}

const inputStringa = 'marco';
const risultato = alfabetoFarfallino(inputStringa);
console.log(risultato); // Output: mafarcofo

document.body.innerHTML = `<p>Risultato: ${risultato}</p>`;