const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const resigterLink = document.querySelector('.resigter-link');

const btnpopup = document.querySelector('.btn-login-poppup');

const iconClose = document.querySelector('.icon-close');


resigterLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
}); 

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
}); 