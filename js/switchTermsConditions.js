//pages
const formPage = document.getElementById("form-page");
const termsPage = document.getElementById('termsPage');

function showForm(){
    formPage.style.display = 'initial';
    termsPage.style.display = 'none';
}

function showTerms(){
    formPage.style.display = 'none';
    termsPage.style.display = 'initial';
}