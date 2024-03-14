document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    const accordionItems = document.querySelectorAll('.accordion');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});
