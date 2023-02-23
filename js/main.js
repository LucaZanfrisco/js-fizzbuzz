let text;
let colorClass;
const container = document.querySelector('.container');

// Ciclo for da 1 a 100
for(let i = 1; i <= 100; i++){
    text = '';
    colorClass = '';
    //Creazione di un box div 100 volte
    const box = document.createElement('div');
    container.append(box);

    // Assegnazione della classe box ai box
    box.classList.add('box');
    
    // Condizioni che verficano se il numero sia divisibile per 3 o per 5 o per entrambi
    if(i%3 == 0 && i%5 == 0){
        text = 'FizzBuzz';
        // console.log(`${i}: ${text}`);
        // box.append(text);
        colorClass = 'FizzBuzz';
        box.classList.add(colorClass);
    }else if(i%3 == 0){
        text = 'Fizz';
        // console.log(`${i}: ${text}`);
        // box.append(text)
        colorClass = 'Fizz';
        box.classList.add(colorClass);
    }else if (i%5 == 0){
        text = 'Buzz'
        // console.log(`${i}: ${text}`);
        // box.append(text);
        colorClass = 'Buzz';
        box.classList.add(colorClass);
    }else{
        // console.log(i);
        box.append(i);
    }
    console.log(i, text);
    box.append(text);
    //box.classList.add(colorClass); Blocca la creazione dei box
}