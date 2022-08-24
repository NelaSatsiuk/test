document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    // burger
    const burger = document.querySelector('.header__burger')
    const menu = document.querySelector('.burger-menu')

    burger.addEventListener('click', () => {
        document.body.classList.toggle('_lock')
        burger.classList.toggle('active')
        menu.classList.toggle('active')
    })

    // select
    const select = document.querySelector('.order__type-system')
    const labelTypeSystem = document.querySelector('.label__type-system')

    select.addEventListener('click', () => {
        select.classList.toggle('active')
        labelTypeSystem.classList.toggle('active')
    })

    // range
    const rangeSlider = document.querySelector('#range')
    const rangeBullet = document.querySelector('.order__range-value')

    let showSliderValue = () => {
        rangeBullet.textContent = rangeSlider.value;
    }
    showSliderValue();
    rangeSlider.addEventListener("input", showSliderValue);

    // animation

    let symbol = document.querySelectorAll(".header__symbol");

    symbol.forEach(item => {
        item.addEventListener("mouseover", function () {
            this.classList.add("animated", "rubberBand");
        });
        item.addEventListener("mouseout", function () {
            this.classList.remove("animated", "rubberBand");
        });
    });

})




