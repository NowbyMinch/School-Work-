const icon = document.querySelector('.icon-div');
const email = document.querySelector('.email-input');
const email2 = document.querySelector('.email-input2');
const arrow = document.querySelector('.icon-div');
const options = document.querySelector('.account-options');
const account = document.getElementById('account');
const filter = document.querySelector('.filter');


icon.addEventListener('click', (ev)=> {
    email.classList.add('active');
    email2.classList.add('active');
    arrow.classList.add('active');
    email2.focus();
    console.log('working');
});

account.addEventListener('mouseover', () => {
    options.classList.add('active');   
    filter.classList.add('active');
});

function out(){
    options.classList.remove('active');   
    filter.classList.remove('active');
}

email.addEventListener('keydown', (ev) => {
    if (ev.key == 'Enter'){
        
       email.classList.add('active');
       email2.classList.add('active');
       arrow.classList.add('active');
       email2.focus();
    
   }
})

email2.addEventListener('keydown', (ev) => {
    if (ev.key == 'Enter'){        
        window.location.href = "main.html";
    }        
})