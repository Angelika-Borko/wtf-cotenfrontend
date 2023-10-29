    // alert("Witaj! :)");

console.log("jestem Twoim console.logiem");
console.log("jestem Twoim drugim console.logiem");

    // funkcja powitalna z parametrami
    //` - backtick / backquote
    // ${zmienna}

const firstName = "Angelika";
const age = 34;

console.log(`Nazywam się ${firstName} i mam ${age} lata`); 

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