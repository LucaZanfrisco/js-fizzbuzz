let text = '';
const container = document.querySelector('.container');

// Ciclo for da 1 a 100
for(let i = 1; i <= 100; i++){
    //Creazione di un box div 100 volte
    const box = document.createElement('div');
    container.append(box);

    // Assegnazione della classe box ai box
    box.classList.add('box');

    // Condizioni che verficano se il numero sia divisibile per 3 o per 5 o per entrambi
    if(i%3 == 0 && i%5 == 0){
        text = 'FizzBuzz';
        console.log(`${i}: ${text}`);
        box.append(text);
        box.classList.add('FizzBuzz');
    }else if(i%3 == 0){
        text = 'Fizz';
        console.log(`${i}: ${text}`);
        box.append(text)
        box.classList.add('Fizz')
    }else if (i%5 == 0){
        text = 'Buzz'
        console.log(`${i}: ${text}`);
        box.append(text);
        box.classList.add('Buzz')
    }else{
        console.log(i);
        box.append(i);
    }
}