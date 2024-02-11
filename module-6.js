
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

// lekcja M06L13 - sprawdzenie jakie klasy ma przycisk - lekcja z hamburger menu

// button.classList.add('testowa');
// console.log(button.classList);

// button.classList.remove('testowa');
// console.log(button.classList);

// // jeśli klasa jest to toggle ją usunie, a jeśli jej nie ma, to ją doda
// button.classList.toggle('testowa');
// console.log(button.classList);

// zwraca boolen czy dana klasa istnieje
