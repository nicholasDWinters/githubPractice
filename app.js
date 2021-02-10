const heading = document.querySelector('h1');

heading.addEventListener('mouseenter', function () {
    heading.style.color = 'blue';
})
heading.addEventListener('mouseleave', function () {
    heading.style.color = 'red';
})