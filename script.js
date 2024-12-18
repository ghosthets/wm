// JavaScript for button interaction, alert on click
document.querySelectorAll('.footer-button').forEach(button => {
    button.addEventListener('click', (e) => {
        alert(`${e.target.innerText.trim()} button clicked!`);
    });
});