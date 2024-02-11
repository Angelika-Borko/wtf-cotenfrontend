// hamburger menu
const hamburger = document.querySelector('.header__hamburger--js');
// console.log(hamburger);

// sprawdzenie klikalności
hamburger.addEventListener('click', () => {
    console.log('hamburger')
});

// dodanie klasy odpowiedzialnej za pojawianie się i znikanie hamburgera [16:00]

// namierzenie nawigacji
const navigation = document.querySelector('.navigation__js');
    console.log(navigation)

// funkcja podmieniająca klasę i rozwijająca oraz zwijająca menu
hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation__js');
    navigation.classList.toggle('navigation__open');
});