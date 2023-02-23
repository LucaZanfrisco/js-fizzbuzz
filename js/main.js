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
        colorClass = 'FizzBuzz';
        // console.log(`${i}: ${text}`);
        // box.append(text);
        // box.classList.add(colorClass);
    }else if(i%3 == 0){
        text = 'Fizz';
        colorClass = 'Fizz';
        // console.log(`${i}: ${text}`);
        // box.append(text)
        // box.classList.add(colorClass);
    }else if (i%5 == 0){
        text = 'Buzz'
        colorClass = 'Buzz';
        // console.log(`${i}: ${text}`);
        // box.append(text);
        // box.classList.add(colorClass);
    }
    
    //Controllo se text non è vuoto a quel punto lo stampo a video e aggiungo al box
    if(text !== ''){
        console.log(i, text);
        box.append(text); 
    }else {
        console.log(i);
        box.append(i);  
    }
    
    // Controllo se la variabile colorClass non è vuota    
    if(colorClass !== ''){
         box.classList.add(colorClass);
    }
}