const hamburgerIcon = document.getElementById('hamburgericon');
const navigation = document.querySelector('.navigation');

function toggleMenu() {
    navigation.classList.toggle('active');
}
hamburgerIcon.addEventListener('click', toggleMenu);
