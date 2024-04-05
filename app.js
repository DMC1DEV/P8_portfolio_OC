document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.classList.add('zoom-on-load');

        item.addEventListener('animationend', () => {
            item.classList.remove('zoom-on-load');
        });
    });
});

