import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.15.10/+esm';

const button = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        button.classList.add('visible-scroll-to-top-button');
    } else {
        button.classList.remove('visible-scroll-to-top-button');
    }
})

button.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

function changeMenuFrame(event, iframeUrl) {
    event.preventDefault();
    const menuFrame = document.getElementById('menu-iframe');
    menuFrame.src = iframeUrl;
}

const bookTableForm = document.getElementById('book-a-table-form');

bookTableForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(bookTableForm);
    const data = Object.fromEntries(formData.entries());

    const nameAndRequestRegex = /^[a-zA-Z\s-]+$/;

    const name = data.name;
    if (name.match(nameAndRequestRegex) == null) {
        showErrorAlert("Name can only contain alphabets, spaces and hyphens");
        return;
    }

    const specialRequest = data['special-request'];
    if (specialRequest && specialRequest.match(nameAndRequestRegex) == null) {
        showErrorAlert("Special request can only contain alphabets, spaces and hyphens");
        return;
    }

    console.log(data);
    showSuccessAlert("Your table has been booked successfully");
    bookTableForm.reset();
})

function showSuccessAlert(message) {
    let timerInterval;
    Swal.fire({
        title: "Success!",
        icon: "success",
        html: message,
        timer: 3000,
        timerProgressBar: false
    })
}

function showErrorAlert(message) {
    Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        timer: 3000,
        confirmButtonText: "Cool"
    });
}