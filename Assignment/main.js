const button = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        button.classList.add('visible-scroll-to-top-button');
    } else {
        button.classList.remove('visible-scroll-to-top-button');
    }
})

button.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

function changeMenuFrame(event, iframeUrl) {
    event.preventDefault();
    const menuFrame = document.getElementById('menu-iframe');
    menuFrame.src = iframeUrl;
}