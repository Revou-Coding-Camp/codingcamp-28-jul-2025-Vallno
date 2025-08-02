const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// Welcome message
const userName = prompt("Masukkan nama Anda:");
if (userName) {
    document.getElementById('welcome-message').textContent = `Hi ${userName}, Welcome To Website`;
}

// Message form
const form = document.getElementById('message-form');
const resultTime = document.getElementById('current-time');
const resultName = document.getElementById('result-name');
const resultBirth = document.getElementById('result-birth');
const resultGender = document.getElementById('result-gender');
const resultMessage = document.getElementById('result-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birth-date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    const currentTime = new Date().toLocaleString();

    resultTime.textContent = currentTime;
    resultName.textContent = name;
    resultBirth.textContent = birthDate;
    resultGender.textContent = gender;
    resultMessage.textContent = message;

    form.reset();
});
