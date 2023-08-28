//pages
const formPage = document.getElementById("form-page");
const termsPage = document.getElementById('termsPage');
const signupMain = document.querySelector('.signup-main');

function showForm(){
    formPage.style.display = 'initial';
    termsPage.style.display = 'none';
    signupMain.classList.add('form-opened');
}

function showTerms(){
    formPage.style.display = 'none';
    termsPage.style.display = 'initial';
    signupMain.classList.remove('form-opened');
}