const icon = document.querySelector('.icon-div');
const email = document.querySelector('.email-input');
const email2 = document.querySelector('.email-input2');
const arrow = document.querySelector('.icon-div');
const options = document.querySelector('.account-options');
const account = document.getElementById('account');
const filter = document.querySelector('.filter');


account.addEventListener('mouseover', () => {
    options.classList.add('active');   
    filter.classList.add('active');
});

function out(){
    options.classList.remove('active');   
    filter.classList.remove('active');
}

