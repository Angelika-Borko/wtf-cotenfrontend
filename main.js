// alert("Witaj! :)");
console.log("jestem Twoim console.logiem");
console.log("jestem Twoim drugim console.logiem");

const firstName = "Angelika";
const age = 34;

console.log(firstName);
console.log(age);

//` - backtick / backquote
// ${zmienna}

console.log(`Nazywam się ${firstName} i mam ${age} lata`);

// funkcja

function calculate(myNumber) {
return myNumber*1;
}

console.log("My number from normal function is",calculate(7));

// funkcja strzałkowa

const calculateWithArrow = myNumber => {
    return myNumber*2;
    }
    
    console.log("My number from arrow function is",calculateWithArrow(7));
    
// funcja strzałkowa skrócona

const calculateWithArrowShort = myNumber => (myNumber*1)*3;
    
    console.log("My number from shortened arrow function is",calculateWithArrowShort(7));