    // alert("Witaj! :)");

console.log("jestem Twoim console.logiem");
console.log("jestem Twoim drugim console.logiem");

    // funkcja powitalna z parametrami
    //` - backtick / backquote
    // ${zmienna}

const firstName = "Angelika";
const age = 34;

    // funkcja powitalna z pracy domowej, z modułu 5

const greet = (greetFirstName, greetAge) => {
    const result = `Witaj ${greetFirstName}! Masz ${greetAge} lata.`;
    return result;
}

console.log(greet('Angelika', 34));

    // funkcja

function calculate(myNumber) {
    return myNumber * 1;
}

console.log("My number from normal function is", calculate(7));

    // funkcja strzałkowa

const calculateWithArrow = myNumber => {
    return myNumber * 2;
}

console.log("My number from arrow function is", calculateWithArrow(7));

    // funcja strzałkowa skrócona

const calculateWithArrowShort = myNumber => (myNumber * 1) * 3;

console.log("My number from shortened arrow function is", calculateWithArrowShort(7));

    // obiekty

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    commander: { // zagnieżdżenie obiektu w obiekcie
        name: 'darth vader' // druga własność name jest częścią kolejnego obiektu, więc może nazywać się w ten sam sposób
    }
}

console.log(deathStar);
console.log(deathStar.name);
console.log(deathStar['diameter']);
console.log(deathStar.commander.name);

deathStar.fire('Russia');


// lekcja M06L12 - eventy - click i zmiana tekstu
    // stworzenie zmiennej dla przycisku
        const button = document.querySelector('.lesson__tile--button--js');

    // dodanie funkcji, która wykona się po kliknięciu - w parametrach funkcji może być pusto, ale jeśli dodamy (e) oraz console.log(e); to zobaczymy dane dotyczące kliknięcia tzw pointer event, czyli zdarzenie kursora
        const clickFunction = (e) => {
            const header = document.querySelector('.lesson__tile--h3--js');
            header.innerHTML = 'Czary Mary :D';
        }

    // dodanie metody nasłuchującej event
    // element.addEventListener('click', nazwaFunkcji);
        button.addEventListener('click', clickFunction);

